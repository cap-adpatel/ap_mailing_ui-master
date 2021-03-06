var storedOuauthValue = null;
var mailingId = null;
var kitId = null;
var capNumber = null;
var afterInterimDate;
var fileWrapperList = [];
var mutagenizedWrapperList = [];
var formIsSubmitted = false; // avoid double click
//var formIsLoading = false; // avoid double click
var ccsFilesUrl = null;
var ccsSearchUrl = null;
var kitUrl = null;
var allFilesTypeMet = false;
var insilico_bucket = null;
var capApprovedForDownload = false;
var fileInputInProgress = false;
var indexCounter = 0;
var deletePms = true;

function kitFolder() {
    return capNumber + '/' + mailingId + '/' + kitId + '/';
}

function filePrefix() {
    return kitId + '-';
}

function resetFileProcessor() {
    unlockPageAfterUpload();
    fileWrapperList = [];
    mutagenizedWrapperList = [];
    mailingId = null;
    kitId = null;
    capNumber = null;
    afterInterimDate = false;
    formIsSubmitted = false;
    capApprovedForDownload = false;
}

function loadFileProcessorWithoutParameters(evt) {
    var txtField = evt.getSource();
    var _mailingId = txtField.getProperty('mailingId');
    var _kitId = txtField.getProperty('kitId');
    var _capNumber = txtField.getProperty('capNumber');
    var _afterInterimDate = txtField.getProperty('afterInterimDate');
    var _capApprovedForDownload = txtField.getProperty('capApprovedforDownload');
    loadFileProcessor(_mailingId, _kitId, _capNumber, _afterInterimDate, _capApprovedForDownload);
}

function loadFileProcessor(values) {
  //  if( !formIsLoading ) {    
  //    formIsLoading = true;         
      var res = values.split("|");
      storedOuauthValue = res[0];
      resetFileProcessor();
      mailingId = res[1];
      kitId = res[2];
      capNumber = res[3];
      afterInterimDate = JSON.parse(res[4]);
      capApprovedForDownload = JSON.parse(res[5]);
      ccsFilesUrl = res[6];
      ccsSearchUrl = res[7];
      kitUrl = res[8];
      insilico_bucket = res[9];
      deletePms=JSON.parse(res[10]);
      console.log('data in: _token' + storedOuauthValue);
      console.log('data in: _mailingId' + mailingId);
      console.log('data in: _kitId' + kitId);
      console.log('data in: _capNumber' + capNumber);
      console.log('data in: _afterInterimDate' + afterInterimDate);
      console.log('data in: _capApprovedForDownload' + capApprovedForDownload);
      console.log('data in: insilico_bucket' + insilico_bucket);
      console.log('data in: deletePms ' + deletePms);
      loadFileWrapperListFromExistingFiles();
  //  }
}

function lockPageBeforeUpload() {
    window.onbeforeunload = function () {
        return true;
    };
}

function unlockPageAfterUpload() {
    window.onbeforeunload = null;
}

function resetAfterUpload() {
    formIsSubmitted = false;
    var fileCatcher = document.getElementById('file-catcher');
    $("#fileCatcher").trigger('reset');
    unlockPageAfterUpload(); // just in case the page is still locked
    fileWrapperList.splice(0, fileWrapperList.length);
    loadFileWrapperListFromExistingFiles();
}

function resetFileInput() {
    document.getElementById("file-input").value = null;
    $('#file-input').val(null);
}

function beginUploadIfAppropriate() {
    var fileButton = document.getElementById('file-button');
    if (fileWrapperList.filter(function (fw) {
        return fw.file != null;
    }).length === 0 || fileWrapperList.filter(function (fw) {
        return !fw.isValid;
    }).length > 0) {
        console.log('doing nothing because there is nothing OR files are not all valid');
    } else if (fileWrapperList.filter(function (fw) {
        return fw.file != null;
    }).length > 0 && fileWrapperList.filter(function (fw) {
        return fw.canCancel;
    }).length === 0) {
        setTimeout(function () {
            fileButton.click();
        }, 3000);
    }
}

function loadFileWrapperListFromExistingFiles() {
    updateUploadMessage('LOADING');
    var containedNames = fileWrapperList.map(function (fw) {
        return fw.fileName;
    });
    ccsListFiles().then(function (payload) {
        var results = payload.response.hits ? payload.response.hits.hits : null;
        if (results) {
            results.forEach(function (src) {
                var d = src._source;
                if (d.size) {
                    var truncatedDated = d.lastModified ? d.lastModified.split(' ')[0] : '';
                    var fileName = d.fileName;
                    if (containedNames.indexOf(fileName) === -1) {
                        if (fileName.indexOf('modified') === -1) {
                            var fw = {
                                file: null,
                                fileName: fileName,
                                fileSize: d.size,
                                fileKey: d.key,
                                bytesUploaded: 0,
                                fileDate: truncatedDated,
                                isValid: true,
                                a: null,
                                progress: null,
                                canCancel: false,
                                rowDiv: null,
                                wrapperDiv: null,
                                pct: null,
                                estimatedTime: null,
                                uploadStartTime: null,
                                manuallyCanceled: false,
                                version: d.insilico.version ? d.insilico.version : 1,
                                actionInProgress: false,
                                indexed: true
                            };
                            fileWrapperList.push(fw);
                        } else if (capApprovedForDownload) {
                            var mw = {
                                fileKey: d.key,
                                fileName: fileName,
                                fileSize: d.size,
                                fileDate: truncatedDated,
                                actionInProgress: false,
                                indexed: true
                            };
                            mutagenizedWrapperList.push(mw);
                        }
                    }
                }
            });
            updateUploadMessage('LOADED');
            resetFileInput();
         //   formIsLoading = false;          
        }
        assignListeners(true);
    });
}

function assignListeners(shouldLoad) {
    turnDiplayOn();
    var fileCatcher = document.getElementById('file-catcher');
    var fileInput = document.getElementById('file-input');
    var fileListDisplay = document.getElementById('file-list-display');
    var mutagenizedListDisplay = document.getElementById('mutagenized-list-display');
    var fileButton = document.getElementById('file-button');
    var groupDiv;
    fileButton.addEventListener('click', function (evnt) {
        evnt = evnt || window.event;
        evnt.preventDefault();
        if (!formIsSubmitted) {
            formIsSubmitted = true;
            resetFileInput();
            beginUpload(fileWrapperList.filter(function (fw) {
                return fw.file != null;
            }));
        } else {
            console.log('no action taken for double click block');
        }
        return false;
    });
    fileInput.addEventListener('change', function (evnt) {
        console.log('file input changed and fileInputInProgress is ' + fileInputInProgress);
        if (!fileInputInProgress) {
            console.log('we will process this request and start by disabling the file-input button');
            document.getElementById("file-input").disabled = true;
            fileInputInProgress = true;
            var filesArray = [];
            for (var i = 0; i < fileInput.files.length; i++) {
                filesArray.push(fileInput.files[i]);
            }
            var newFileNames = filesArray.map(function (n) {
                var uploadedFileName = n.name;
                if (uploadedFileName.indexOf(filePrefix()) === -1) {
                    uploadedFileName = filePrefix() + uploadedFileName;
                }
                return uploadedFileName;
            });
            var replacedFiles = fileWrapperList.filter(function (fileWrapper) {
                return newFileNames.indexOf(fileWrapper.fileName) > -1;
            });
            fileWrapperList = fileWrapperList.filter(function (fileWrapper) {
                return newFileNames.indexOf(fileWrapper.fileName) === -1;
            });
            for (var i = 0; i < fileInput.files.length; i++) {
                console.log(i + '. adding file to fileWrapperList ' + fileInput.files[i].name);
                fileWrapperList.push(validateRenameWrapFile(fileInput.files[i], replacedFiles));
            }
            updateUploadMessage('QUEUED');
            renderFileList();
            console.log('we are done processing this request and now enabling the file-input button');
            document.getElementById("file-input").disabled = false;
            fileInputInProgress = false;
            resetFileInput();
        }
    });

    function renderFileList() {
        while (fileListDisplay.firstChild) {
            fileListDisplay.removeChild(fileListDisplay.firstChild);
        }
        groupDiv = getGroupDiv();
        var messageDiv = getGroupDiv();
        if (fileWrapperList.length > 0) {
            updateInputMessage();
        }
        fileWrapperList.sort(function (a, b) {
            if (a.file && b.file) {
                return a.uploadDate > b.uploadDate;
            } else if (a.file && !b.file) {
                return -1;
            } else if (!a.file && b.file) {
                return 1;
            } else {
                return a.fileName.localeCompare(b.fileName);
            }
        });
        fileWrapperList.forEach(function (fw, index) {
            fw.rowDiv = buildNewRowDiv(fw, index, afterInterimDate, provideActionLink(fw));
            groupDiv.appendChild(fw.rowDiv);
        });
        if (fileWrapperList.length >= 10) {
            groupDiv.setAttribute("style", "overflow-y:scroll; height:200px;  width:700px;");
        } else {
            groupDiv.setAttribute("style", "height:200px;    width:700px;");
        }
        fileListDisplay.appendChild(groupDiv);
        beginUploadIfAppropriate();
    }

    function renderMutagenziedList() {
        var messageDiv = getGroupDiv();
        var mutagenizedDiv = getGroupDiv();
        if (capApprovedForDownload) {
            while (mutagenizedListDisplay.firstChild) {
                mutagenizedListDisplay.removeChild(mutagenizedListDisplay.firstChild);
            }
            downloadInputMessage(DOWNLOAD_FILES);
            mutagenizedWrapperList.sort(function (a, b) {
                return a.fileName.localeCompare(b.fileName);
            });
            mutagenizedWrapperList.forEach(function (mw, index) {
                mutagenizedDiv.appendChild(getMutagenziedRowDiv(mw, index));
                mw.a.addEventListener('click', function (evnt) {
                    console.log('download triggered');
                    evnt = evnt || window.event;
                    evnt.preventDefault();
                    triggerDownload(mw);
                    return false;
                });
            });
            if (mutagenizedWrapperList.length >= 5) {
                mutagenizedDiv.setAttribute("style", "overflow-y:scroll; height:150px;  width:700px;");
            } else {
                mutagenizedDiv.setAttribute("style", "height:150px;    width:700px;");
            }
            mutagenizedListDisplay.appendChild(mutagenizedDiv);
        }
    }

    function uploadInProgress() {
        var cannotCancel = fileWrapperList.every(function (fileWrapper) {
            return !fileWrapper.canCancel;
        });
        return !cannotCancel;
    }

    function setFileInputClickability() {
        document.getElementById("file-input").disabled = uploadInProgress();
    }

    function executeJustOne(fw) {
        return new Promise(function (resolve, reject) {
            uploadOne(fw, resolve, reject);
        });
    }

    function runSerial(fws) {
        var result = Promise.resolve();
        fws.forEach(function(fw) {
            result = result.then(function() {
                return executeJustOne(fw);
            });
        });
        return result;
    }

    function beginUpload() {
        var onlyFwForUpload = fileWrapperList.filter(function(fw) {
            return fw.file !== null
        });
        if (onlyFwForUpload && onlyFwForUpload.length > 0) {
            runSerial(onlyFwForUpload)
                .then(function() {
                console.log('fwPromises --->', onlyFwForUpload);
                var indexPromises = onlyFwForUpload.map( function(fu) {
                    return fu.indexPromise;
                });
                Promise.all(indexPromises).then(function(msg) {
                    resetAfterUpload();
                });
            });
        } else {
            console.log('skipping because nothing there to upload');
        }
    }

    function uploadOne(fw, resolve, reject) {
        if (fw.file) {
            appendProgress(fw);
            fw.canCancel = true;
            var partsCounter = 1;
            lockPageBeforeUpload();
            setFileInputClickability();
            getS3Promise().then(function (s3) {
                fw.bytesUploaded = 0;
                fw.a.innerHTML = 'Cancel';
                fw.sub = s3.upload(ccsUploadParams(fw), ccsUploadOptions(), {});
                fw.sub.on('httpUploadProgress', function (evt) {
                    displayUploadStatus(fw, evt);
                }).send(function (err, data) {
                    unlockPageAfterUpload();
                    fw.canCancel = false;
                    setFileInputClickability();
                    if (err) {
                        console.log('upload error occurred', err);
                        displayFinalUploadStatus(fw, false);
                        resolve('Upload did not fully complete');
                    } else {
                        var eventValue = '3';
                        if (fw.fileName.toLowerCase().indexOf('.bed') > 0) {
                            eventValue = '2';
                        }
                        console.log('UPLOAD COMPLETE!!!');
                        auditUploadToScreen(fw);
                        fw.indexPromise = confirmIndexed(fw);
                        displayFinalUploadStatus(fw, true);
                        auditKitEvent(eventValue).then(function (x) {
                            console.log('pg action logged', x);
                        });
                        resolve(fw);
                    }
                });
            });
        } else {
            resolve('File must have been removed before we could get to it.');
        }
    }

    function replaceWithOriginal(fileName, shouldRenderFileList) {
        ccsGetFile(fileName).then(function (payload) {
            var results = payload.response.hits ? payload.response.hits.hits : null;
            if (results && results.length > 0) {
                var d = results[0]._source;
                if (d && d.size) {
                    var truncatedDated = d.lastModified ? d.lastModified.split(' ')[0] : '';
                    console.log('truncatedDate', truncatedDated);
                    var fw = {
                        file: null,
                        fileName: fileName,
                        fileSize: d.size,
                        fileKey: d.key,
                        bytesUploaded: 0,
                        fileDate: truncatedDated,
                        isValid: true,
                        a: null,
                        progress: null,
                        canCancel: false,
                        rowDiv: null,
                        wrapperDiv: null,
                        pct: null,
                        estimatedTime: null,
                        uploadStartTime: null,
                        manuallyCanceled: false,
                        version: d.insilico.version ? d.insilico.version : 1,
                        indexed: true
                    };
                    fileWrapperList.push(fw);
                    if (shouldRenderFileList) {
                        renderFileList();
                    }
                }
            }
        });
    }

    function provideActionLink(fw) {
        if (!afterInterimDate) {
            var hDiv = getActionDiv();
            var rDiv = document.createElement("div");
            rDiv.setAttribute("style", "width:5px; text-align:center; text-decoration:underline;  ");
            fw.a = getActionAnchor(fw);
            fw.a.addEventListener('click', function (evnt) {
                evnt = evnt || window.event;
                evnt.preventDefault();
                if (fw.file) {
                    formIsSubmitted = false;
                    if (fw.canCancel) {
                        fw.file = null;
                        fileWrapperList = fileWrapperList.filter(function (fww) {
                            return fw.fileName !== fww.fileName;
                        });
                        fw.manuallyCanceled = true;
                        fw.sub.abort();
                    } else if (uploadInProgress()) {
                        removeElementFromView(fw, groupDiv);
                        fw.file = null;
                        fileWrapperList = fileWrapperList.filter(function (fww) {
                            return fw.fileName !== fww.fileName;
                        });
                        replaceWithOriginal(fw.fileName, false);
                        updateInputMessage();
                    } else if (!uploadInProgress()) {
                        console.log('Removing ' + fw.fileName + ' from list of ' + fileWrapperList.length);
                        removeElementFromView(fw, groupDiv);
                        fileWrapperList = fileWrapperList.filter(function (fww) {
                            return fw.fileName !== fww.fileName;
                        });
                        console.log('Removed ' + fw.fileName + ' from list of ' + fileWrapperList.length);
                        replaceWithOriginal(fw.fileName, true);
                        updateInputMessage();
                    }
                    beginUploadIfAppropriate();
                    updateUploadMessage('CANCEL');
                } else {
                    deleteDocument(fw.fileKey).then(function (rsp) {
                        removeElementFromView(fw, groupDiv);
                        fileWrapperList = fileWrapperList.filter(function (fww) {
                            return fw.fileName !== fww.fileName;
                        });
                        updateUploadMessage('DELETE');
                        updateInputMessage();
                    });
                }
                resetFileInput();
                return false;
            });
            rDiv.appendChild(fw.a);
            hDiv.appendChild(rDiv);
            return hDiv;
        } else {
            return null;
        }
    }
    if (shouldLoad) {
        renderFileList();
        renderMutagenziedList();
    }
}
var NO_FILES_MET = 0;
var BED_MET = 1;
var STARTERS_MET = 2;
var ALL_FILES_MET = 3;
var UPLOAD_MSG_RESET = '';
var UPLOAD_MSG_START = 'Please wait while we retrieve any existing files.'; // message shown while calling ccs
var UPLOAD_MSG_DEFICIENT_ALL = 'Please upload one or more .bed file and one or more baseline files (.fastq or .bam)'; // no files uploaded
var UPLOAD_MSG_DEFICIENT_BED = 'One .bed file is required. Please upload.'; // no bed
var UPLOAD_MSG_DEFICIENT_STARTER = 'At least one .fastq or .bam file is required. Please upload.'; // no starter files
var UPLOAD_MSG_SUFFICIENT_ALL = 'Received one or more sequencing data files.'; //'You have successfully uploaded .bed and baseline files (.fastq.gz or .bam)'; // everything looks good
var UPLOAD_MSG_INVALID_FOR_UPLOAD = 'Please remove invalid files to continue.';
var UPLOAD_COMMENCED = 'Your upload has commenced. Please wait.';
var UPLOAD_MSG_DONE = 'File(s) uploaded.';
var FILE_DELETED = 'File(s) removed.';
var DOWNLOAD_FILES = "File(s) processed by the manufacturer.";

var loadingMessageDiv = document.createElement("div");
loadingMessageDiv.setAttribute("style", "margin-bottom:4px; padding: 4px; color: orange");
loadingMessageDiv.innerHTML = "LOADING...";

var invalidFormatDisplay = document.createElement("p");
invalidFormatDisplay.setAttribute("style", "margin-bottom:4px; padding: 4px; color: black; font-size:11px;font-weight:bold;font-style:normal;text-align:left;font-family:Arial,Helvetica,sans-serif;white-space:nowrap; background-color: #FFFFE0");
invalidFormatDisplay.innerHTML = "One or more files you have added doesn't match the expected format. ";

var messageText = document.createElement("p");
messageText.innerHTML = null;

function updateUploadMessage(condition) {
    /*
      Conditions:
        LOADING, LOADED, QUEUED, UPLOADS_COMPLETE, DELETE, CANCEL
    */
    var messageDiv = document.getElementById("upload-message");
    if (messageDiv && messageDiv.contains(messageText)) {
        messageDiv.removeChild(messageText);
        messageText.innerHTML = UPLOAD_MSG_RESET;
        messageText.removeAttribute("style");
    } // set a default style
    messageText.setAttribute("style", "padding-bottom:10px;font-size:11px;color:black;font-weight:bold;font-style:normal;text-align:left;font-family:Arial,Helvetica,sans-serif;white-space:nowrap;");
    if (condition === 'LOADING') {
        messageText.innerHTML = UPLOAD_MSG_START;
    } else if (condition === 'LOADED') {
        var filesMetValue = getFilesMet();
        if (filesMetValue === ALL_FILES_MET) {
            //  messageText.innerHTML = UPLOAD_MSG_SUFFICIENT_ALL;
            messageText.removeAttribute("style");
            messageText.setAttribute("style", "padding-bottom:10px;font-size:11px;color:green;font-weight:bold;font-style:normal;text-align:left;font-family:Arial,Helvetica,sans-serif;white-space:nowrap;");
            messageText.innerHTML = '<div><img src="../../../../../../images/completed.png"   style="width: 20px;height: 18px;"/>' + '&nbsp;&nbsp;' + UPLOAD_MSG_SUFFICIENT_ALL + '</div>';
        } else if (filesMetValue === BED_MET) {
            messageText.removeAttribute("style");
            messageText.setAttribute("style", "padding-bottom:10px;font-size:11px;color:red;font-weight:bold;font-style:normal;text-align:left;font-family:Arial,Helvetica,sans-serif;white-space:nowrap;");
            messageText.innerHTML = '<div><img src="../../../../../../images/incomplete.png"   style="width: 20px;height: 18px;"/>' + '&nbsp;&nbsp;' + UPLOAD_MSG_DEFICIENT_STARTER + '</div>';
        } else if (filesMetValue === STARTERS_MET) {
            messageText.removeAttribute("style");
            messageText.setAttribute("style", "padding-bottom:10px;font-size:11px;color:red;font-weight:bold;font-style:normal;text-align:left;font-family:Arial,Helvetica,sans-serif;white-space:nowrap;");
            messageText.innerHTML = '<div><img src="../../../../../../images/incomplete.png"   style="width: 20px;height: 18px;"/>' + '&nbsp;&nbsp;' + UPLOAD_MSG_DEFICIENT_BED + '</div>';
        } else if (filesMetValue === NO_FILES_MET) {
            messageText.removeAttribute("style");
            messageText.setAttribute("style", "padding-bottom:10px;font-size:11px;color:red;font-weight:bold;font-style:normal;text-align:left;font-family:Arial,Helvetica,sans-serif;white-space:nowrap;");
            messageText.innerHTML = '<div><img src="../../../../../../images/incomplete.png"   style="width: 20px;height: 18px;"/>' + '&nbsp;&nbsp;' + UPLOAD_MSG_DEFICIENT_ALL + '</div>';
        }
    } else if (condition === 'QUEUED' || condition === 'CANCEL') {
        if (fileWrapperList.filter(function (fw) {
            return !fw.isValid;
        }).length > 0) {
            messageText.removeAttribute("style");
            messageText.setAttribute("style", "padding-bottom:10px;font-size:11px;color:red;font-weight:bold;font-style:normal;text-align:left;font-family:Arial,Helvetica,sans-serif;white-space:nowrap;");
            messageText.innerHTML = '<div><img src="../../../../../../images/incomplete.png"   style="width: 20px;height: 18px;"/>' + '&nbsp;&nbsp;' + UPLOAD_MSG_INVALID_FOR_UPLOAD + '</div>';
        } else if (fileWrapperList.filter(function (fw) {
            return fw.file !== null;
        }).length > 0) {
            messageText.removeAttribute("style");
            messageText.setAttribute("style", "padding-bottom:10px;font-size:11px;color:black;font-weight:bold;font-style:normal;text-align:left;font-family:Arial,Helvetica,sans-serif;white-space:nowrap;");
            messageText.innerHTML = UPLOAD_COMMENCED;
        } else {
            updateUploadMessage('LOADED');
        }
    } else if (condition === 'UPLOADS_COMPLETE') {
        // messageText.innerHTML = UPLOAD_MSG_DONE;
        messageText.removeAttribute("style");
        messageText.setAttribute("style", "padding-bottom:10px;font-size:11px;color:green;font-weight:bold;font-style:normal;text-align:left;font-family:Arial,Helvetica,sans-serif;white-space:nowrap;");
        messageText.innerHTML = '<div><img src="../../../../../../images/completed.png"   style="width: 20px;height: 18px;"/>' + '&nbsp;&nbsp;' + UPLOAD_MSG_DONE + '</div>';
    } else if (condition === 'DELETE') {
        // messageText.innerHTML = FILE_DELETED;
        messageText.removeAttribute("style");
        messageText.setAttribute("style", "padding-bottom:10px;font-size:11px;color:green;font-weight:bold;font-style:normal;text-align:left;font-family:Arial,Helvetica,sans-serif;white-space:nowrap;");
        messageText.innerHTML = '<div><img src="../../../../../../images/completed.png"   style="width: 20px;height: 18px;"/>' + '&nbsp;&nbsp;' + FILE_DELETED + '</div>';
        setTimeout(function () {
            updateUploadMessage('LOADED');
        }, 4000);
    }
    messageDiv.appendChild(messageText);
}

function getFilesMet() {
    if (fileWrapperList === null || fileWrapperList.length === 0) {
        console.log('--> NO_FILES_MET', fileWrapperList);
        return NO_FILES_MET;
    } else {
        if (fileWrapperList.filter(function (f) {
            return f.fileName.toLowerCase().indexOf('.bed') === (f.fileName.length -4);
        }).length > 0) {
            if (fileWrapperList.filter(function (f) {
                return f.fileName.toLowerCase().indexOf('.bed') === (f.fileName.length -4);
            }).length < fileWrapperList.length) {
                return ALL_FILES_MET;
            } else {
                return BED_MET;
            }
        } else {
            return STARTERS_MET;
        }
    }
}

function buildNewRowDiv(fileWrapper, index, afterInterimDate, actionLink) {
    var rowDiv = document.createElement("div");
    rowDiv.id = "left" + index;
    rowDiv.setAttribute("style", "margin-bottom:10px; margin-top:10px;white-space: nowrap");
    var fileDescriptionDiv = document.createElement('div');
    var textColor = fileWrapper.isValid ? "black" : "red";
    fileDescriptionDiv.setAttribute("style", "float:left;width:81%;white-space: nowrap;font-size:12px;font-weight: normal ; color: " + textColor);
    fileDescriptionDiv.innerHTML = fileWrapper.fileName + getFileDisplayDetails(fileWrapper);
    rowDiv.appendChild(fileDescriptionDiv); // Append the link to the div
    if (!afterInterimDate) {
        rowDiv.appendChild(actionLink);
    }
    var floatFixDiv = document.createElement("div");
    floatFixDiv.setAttribute("style", "clear:both; font-size:1px;");
    rowDiv.appendChild(floatFixDiv);
    return rowDiv;
}

function getActionDiv(fw) {
    return document.createElement("div");
}

function getActionAnchor(fw) {
    var a = document.createElement('a');
    a.href = '#';
    if (fw.file) {
        a.innerHTML = fw.isValid ? "" : "Clear";
    } else {
        a.innerHTML = deletePms? "Delete" : "";
    }
    return a;
}

function getGroupDiv() {
    return document.createElement("div");
}

function appendProgress(fw) {
    if (!fw.progress) {
        fw.progress = document.createElement("progress");
        fw.rowDiv.appendChild(fw.progress);
    }
    fw.progress.max = fw.file.size;
    fw.pct = document.createElement("div");
    fw.pct.setAttribute('style', 'float:left');
    fw.estimatedTime = document.createElement("div");
    fw.estimatedTime.setAttribute('style', 'float:right');
    fw.wrapperDiv = document.createElement("div");
    fw.wrapperDiv.setAttribute("style", "width:77%; margin-bottom:30px;");
    fw.wrapperDiv.appendChild(fw.pct);
    fw.wrapperDiv.appendChild(fw.estimatedTime);
    fw.rowDiv.appendChild(fw.wrapperDiv);
}

function removeElementFromView(fw, groupDiv) {
    if (groupDiv && groupDiv.contains(fw.rowDiv)) {
        groupDiv.removeChild(fw.rowDiv);
    }
}

function buildSizeRowDiv(mw) {
    var sizeDiv = document.createElement("div");
    sizeDiv.innerHTML = formatFileSize(mw.fileSize);
    return sizeDiv;
}

function buildNewDownloadRowDiv(mw, size, index) {
    mw.a = document.createElement('a');
    mw.a.href = '#';
    mw.a.innerHTML = mw.fileName + '&nbsp;&nbsp;&nbsp;&nbsp;(' + size + ')';
    return mw.a;
}

function getMutagenziedRowDiv(mw, index) {
    var rowDiv = document.createElement("div");
    rowDiv.setAttribute("style", "float:left;width:81%; font-size:12px;color: #00A3BB");
    var linkElement = buildNewDownloadRowDiv(mw, formatFileSize(mw.fileSize), index);
    rowDiv.appendChild(linkElement);
    return rowDiv;
}

function getFileDisplayDetails(fw) {
    var fileDetails = '';
    if (fw.isValid) {
        var versionValue = '';
        if (fw.version > 1) {
            versionValue = ', Version ' + fw.version;
        }
        fileDetails = '&nbsp;&nbsp;&nbsp;&nbsp;(' + moment(new Date(fw.fileDate)).format('M/D/YY') + ',  ' + formatFileSize(fw.fileSize) + versionValue + ')';
    } else {
        fileDetails = '<div style="color:red">Invalid file. Allowed file types: .bed, .fastq, .bam. Only alpha/numeric characters, hyphen, underscore and period are allowed in the file name.</div>';
    }
    return fileDetails;
}

function clearUploadStatusDivs(fw) {
    while (fw.wrapperDiv.firstChild) {
        fw.wrapperDiv.removeChild(fw.wrapperDiv.firstChild);
    }
}

function displayFinalUploadStatus(fw, isComplete) {
    var cancelMessage = fw.manuallyCanceled ? '<span style="color:red;">Your upload is canceled. The system is clearing the upload.</span>' : '<span style="color:red;">File upload is canceled due ot a problem with the network connection Please try your upload again</span>';
    var msg = isComplete ? 'UPLOAD COMPLETE' : cancelMessage;
    if (isComplete) {
        fw.progress.value = fw.file.size;
    } else {
        if (fw.rowDiv.contains(fw.progress)) {
            fw.rowDiv.removeChild(fw.progress);
        }
    }
    fw.a.innerHTML = '';
    clearUploadStatusDivs(fw);
    fw.wrapperDiv.innerHTML = msg;
}

function displayUploadStatus(fw, evt) {
    if (fw.uploadStartTime == null) {
        fw.uploadStartTime = new Date().getTime();
    }
    fw.bytesUploaded = Math.max(fw.bytesUploaded, evt.loaded);
    fw.progress.value = fw.bytesUploaded;
    var pctComplete = fw.bytesUploaded * 100 / evt.total;
    fw.pct.innerHTML = parseFloat(pctComplete).toFixed(1) + '%';
    fw.estimatedTime.innerHTML = estimateTimeRemaining(fw, pctComplete);
}

function getNoFileRowDiv(mw) {
    var rowDiv = document.createElement("div");
    rowDiv.setAttribute("style", "margin-bottom:4px; color: gray");
    rowDiv.innerHTML = mw;
    return rowDiv;
}

function getMessageRowDiv(mw) {
    var rowDiv = document.createElement("div");
    rowDiv.setAttribute("style", "padding: 2px; font-size:12px;color: #00A3BB");
    rowDiv.innerHTML = mw;
    return rowDiv;
}

function fileLengthRowDiv(mw) {
    var rowDiv = document.createElement("div");
    rowDiv.setAttribute("style", "border-width:0px;position absolute;left:74px;top:774px;width:269px;height:14px;font-size:11px;color:#8A8A8A;");
    var file = mw.length > 1 ? ' files' : ' file';
    if (mw.length > 0) rowDiv.innerHTML = mw.length + file;
    return rowDiv;
}

function updateInputMessage() {
    var inputMessage = document.getElementById('input-message');
    if (inputMessage) {
        inputMessage.innerHTML = "";
        if (allFilesTypeMet) {
            inputMessage.setAttribute("style", "padding-bottom:5px;font-size:11px;color:green;font-weight:bold;font-style:normal;text-align:left;font-family:Arial,Helvetica,sans-serif;white-space:nowrap;font-size:11px;color:#408740;");
            inputMessage.innerHTML = '<div><img  src="../../../../../../images/completed.png"  style="width: 20px;height: 18px;" />' + '&nbsp;&nbsp;' + FILES_UPLOADED + '</div>';
        }
        inputMessage.appendChild(fileLengthRowDiv(fileWrapperList));
    }
}

function downloadInputMessage(msg) {
    var downloadMsg = document.getElementById('download-message');
    if (downloadMsg) {
        downloadMsg.innerHTML = "";
        if (mutagenizedWrapperList.length > 0) {
            downloadMsg.setAttribute("style", "padding-bottom:10px;font-size:11px;color:green;font-weight:bold;font-style:normal;text-align:left;font-family:Arial,Helvetica,sans-serif;white-space:nowrap;");
            downloadMsg.innerHTML = '<div><img  src="../../../../../../images/completed.png"  style="width: 20px;height: 18px;" />' + '&nbsp;&nbsp;' + msg + '</div>';
            downloadMsg.appendChild(fileLengthRowDiv(mutagenizedWrapperList));
        } else {
            downloadMsg.innerHTML = "No file to download";
            downloadMsg.setAttribute("style", "order-width: 0px; #position: absolute;left: 0px;top: 0px; width: 105px;height: 10px;font-family: 'Arial Italic', 'Arial';font-weight: 400;font-style: italic; font-size: 12px; color: #8A8A8A;");
        }
    }
}

function turnDiplayOn() {
    if (!afterInterimDate) {
        $('#file-input-section').show();
    } else {
        $('#file-input-section').hide();
    }
}
function formatFileSize(bytes) {
    var thresh = 1000;
    if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }
    var units = ['kb', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var u = -1;
    do {
        bytes /= thresh;
        ++u;
    } while (Math.abs(bytes) >= thresh && u < units.length - 1);
    return bytes.toFixed(1) + ' ' + units[u];
}

function estimateTimeRemaining(fw, pctComplete) {
    var estValue = 'Time remaining: ';
    var thisTime = new Date().getTime();
    var timeDifference = thisTime - fw.uploadStartTime;
    var endTimeGuess = timeDifference / pctComplete * 100 - timeDifference;
    return estValue + getTimeStringFromTime(endTimeGuess);
}

function getTimeStringFromTime(timeDifference) {
    var actualValue = '';
    timeDifference = timeDifference / 1000;
    var seconds = Math.floor(timeDifference % 60);
    timeDifference = timeDifference / 60;
    var minutes = Math.floor(timeDifference % 60);
    timeDifference = timeDifference / 60;
    var hours = Math.floor(timeDifference % 24);
    if (hours > 0) {
        actualValue += hours + ' hours, ';
        actualValue += minutes + ' minutes, ';
        actualValue += seconds + ' seconds';
    } else if (minutes > 0) {
        actualValue += minutes + ' minutes, ';
        actualValue += seconds + ' seconds';
    } else if (seconds > 0) {
        actualValue += seconds + ' seconds';
    } else {
        actualValue = '...';
    }
    return actualValue;
}

function auditUploadToScreen(fw) {
    var thisTime = new Date().getTime();
    var timeDifference = thisTime - fw.uploadStartTime;
    var actualValue = getTimeStringFromTime(timeDifference);
    var transferRate = parseFloat(fw.fileSize / 1000000 / ((thisTime - fw.uploadStartTime) / 1000)).toFixed(3) + ' mbps';
    console.log(fw.fileName + '  |  ' + formatFileSize(fw.fileSize) + '  |  ' + actualValue + '  |  ' + transferRate);
}

function validateRenameWrapFile(file, replacedFiles) {
    var fileName = file.name;
    var fileNameLength = fileName.length;
    var isValid = true; //is the file the proper file type?
    if (fileName.toLowerCase().indexOf('bam') !== fileNameLength - 3 && fileName.toLowerCase().indexOf('bed') !== fileNameLength - 3 && fileName.toLowerCase().indexOf('fastq') !== fileNameLength - 5 && fileName.toLowerCase().indexOf('fastq.gz') !== fileNameLength - 8) {
        isValid = false;
    } //Is the file a modified or does it have a space?
    if (isValid) {
        var regexPattern = /[$&+,:;=?@#|'<>^*()%!]/g;
        isValid = fileName.toLowerCase().indexOf('modified') === -1 && fileName.toLowerCase().indexOf(' ') === -1 && fileName.search(regexPattern) === -1;
    } //Is the file a modified or does it have a space?
    if (isValid && fileName.indexOf(filePrefix()) === -1) {
        fileName = filePrefix() + fileName;
    }
    var calculatedVersion = getCalculatedVersion(fileName, replacedFiles);
    var versionDate = new Date();
    if (file.lastModified !== undefined) {
        versionDate = new Date(file.lastModified);
    }
    var simpleDateString = moment(versionDate).format('M/D/YY');
    return {
        file: file,
        fileName: fileName,
        fileSize: file.size,
        fileDate: simpleDateString,
        uploadDate: new Date(),
        bytesUploaded: 0,
        isValid: isValid,
        a: null,
        progress: null,
        canCancel: false,
        sub: null,
        version: calculatedVersion,
        indexed: false
    };
}

function getCalculatedVersion(fileName, replacedFiles) {
    if (replacedFiles.filter(function (f) {
        return f.fileName === fileName;
    }).length === 0) {
        return 1; // adding for the first time
    } else if (replacedFiles.filter(function (f) {
        return f.fileName === fileName;
    })[0].file !== null) {
        return replacedFiles.filter(function (f) {
            return f.fileName === fileName;
        })[0].version;
    } else {
        return parseInt(replacedFiles.filter(function (f) {
            return f.fileName === fileName;
        })[0].version) + 1;
    }
}

function getChecksum(fw) {
    var file = fw.file;
    return new Promise(function (resolve, reject) {
        var blobSlice = File.prototype.slice;
        var chunkSize = 5 * 1024 * 1024;
        var chunks = Math.ceil(file.size / chunkSize);
        var currentChunk = 0;
        var sparks = [];
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            sparks.push(SparkMD5.ArrayBuffer.hash(fileReader.result, true));
            currentChunk++;
            if (currentChunk < chunks) {
                loadNext();
            } else {
                if (sparks.length === 1) {
                    fw.checksum = SparkMD5.hash(sparks[0]);
                } else {
                    var preValue = '';
                    sparks.forEach(function (spark) {
                        preValue += spark;
                    });
                    fw.checksum = SparkMD5.hashBinary(preValue) + '-' + chunks;
                }
                resolve('complete');
            }
        };
        fileReader.onerror = function () {
            console.warn('oops, something went wrong.');
        };
        function loadNext() {
            var start = currentChunk * chunkSize;
            var end = start + chunkSize >= file.size ? file.size : start + chunkSize;
            fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
        }
        loadNext();
    });
}


function ccsUploadOptions() {
    return {
        partSize: 10 * 1024 * 1024,
        queueSize: 10
    };
}

function ccsUploadParams(fw) {
    return {
        Key: kitFolder() + fw.fileName,
        ContentType: 'binary/octet-stream',
        Body: fw.file,
        Bucket: insilico_bucket,
        Metadata: {
            'mailingId': mailingId,
            'labId': capNumber,
            'kitId': kitId,
            'uploadType': 'starter',
            'uploadedBy': 'dfm',
            'version': fw.version.toString()
        }
    };
}

function getS3Promise() {
    return new Promise(function (resolve, reject) {
        var authorizationToken = 'Bearer ' + storedOuauthValue;
        $.ajax({
            type: 'POST',
            beforeSend: function beforeSend(request) {
                request.setRequestHeader("content-type", "application/json");
                request.setRequestHeader("Authorization", authorizationToken);
                request.setRequestHeader("AppContext", "insilico");
                request.setRequestHeader("LabContext", capNumber);
                request.setRequestHeader("Action", "upload");
            },
            url: ccsFilesUrl,
            processData: false,
            success: function success(st) {
                resolve(getS3Client(st));
            }
        });
    });
}

function ccsGetFile(fileName) {
    return new Promise(function (resolve, reject) {
        var folder = kitFolder();
        var params = {
            Bucket: insilico_bucket,
            Prefix: folder
        };
        var authorizationToken = 'Bearer ' + storedOuauthValue;
        var queryArray = [];
        var mObj = {
            field_name: 'fileName',
            field_value: fileName.toString()
        };
        queryArray.push(mObj);
        var searchQuery = {
            queryFields: queryArray,
            queryOperation: 'AND',
            subQueries: [],
            queryType: 'SIMPLE'
        };
        $.ajax({
            type: 'POST',
            beforeSend: function beforeSend(request) {
                request.setRequestHeader("content-type", "application/json");
                request.setRequestHeader("Authorization", authorizationToken);
                request.setRequestHeader("AppContext", "insilico");
                request.setRequestHeader("LabContext", capNumber);
                request.setRequestHeader("Action", "search");
            },
            url: ccsSearchUrl,
            data: JSON.stringify(searchQuery),
            dataType: 'json',
            success: function success(results) {
                console.log('resutlts', results);
                resolve(results);
            }
        });
    });
}

function ccsListFiles(cb) {
    return new Promise(function (resolve, reject) {
        var folder = kitFolder();
        var params = {
            Bucket: insilico_bucket,
            Prefix: folder
        };
        var authorizationToken = 'Bearer ' + storedOuauthValue;
        var queryArray = [];
        var mObj = {
            field_name: 'insilico.mailingId',
            field_value: mailingId
        };
        queryArray.push(mObj);
        var kObj = {
            field_name: 'insilico.kitId',
            field_value: kitId
        };
        queryArray.push(kObj);
        var searchQuery = {
            queryFields: queryArray,
            queryOperation: 'AND',
            subQueries: [],
            queryType: 'SIMPLE'
        };
        $.ajax({
            type: 'POST',
            beforeSend: function beforeSend(request) {
                request.setRequestHeader("Authorization", authorizationToken);
                request.setRequestHeader("content-type", "application/json");
                request.setRequestHeader("AppContext", "insilico");
                request.setRequestHeader("LabContext", capNumber);
                request.setRequestHeader("Action", "search");
            },
            url: ccsSearchUrl,
            data: JSON.stringify(searchQuery),
            dataType: 'json',
            success: function success(results) {
                console.log('resutlts', results);
                resolve(results);
            }
        });
    });
}

function triggerDownload(mw) {
    if (!mw.actionInProgress) {
        mw.actionInProgress = true;
        getDownloadUrl(mw.fileKey).then(function (r) {
            var a = document.createElement('a');
            a.setAttribute('id', 'downloader-' + mw.fileKey);
            document.body.appendChild(a);
            a.setAttribute('style', 'display: none');
            a.href = r.url;
            a.download = mw.fileName;
            a.click();
            console.log('download starting');
            window.URL.revokeObjectURL(r.url);
            mw.actionInProgress = false;
        });
    }
}

function getDownloadUrl(key) {
    return new Promise(function (resolve, reject) {
        var authorizationToken = 'Bearer ' + storedOuauthValue;
        $.ajax({
            type: 'GET',
            beforeSend: function beforeSend(request) {
                request.setRequestHeader("Authorization", authorizationToken);
                request.setRequestHeader("AppContext", "insilico");
                request.setRequestHeader("LabContext", capNumber);
                request.setRequestHeader("Action", "download");
                request.setRequestHeader("ContentKey", key);
            },
            url: ccsFilesUrl,
            processData: false,
            success: function success(st) {
                resolve(st);
            }
        });
    });
}

function deleteDocument(key) {
    return new Promise(function (resolve, reject) {
        var authorizationToken = 'Bearer ' + storedOuauthValue;
        $.ajax({
            type: 'DELETE',
            beforeSend: function beforeSend(request) {
                request.setRequestHeader("Authorization", authorizationToken);
                request.setRequestHeader("AppContext", "insilico");
                request.setRequestHeader("LabContext", capNumber);
                request.setRequestHeader("Action", "delete");
                request.setRequestHeader("ContentKey", key);
            },
            url: ccsFilesUrl,
            processData: false,
            success: function success(st) {
                resolve('file deleted');
            }
        });
    });
}

function getS3Client(details) {
    var region = 'us-east-1';
    var creds = new AWS.Credentials(details);
    AWS.config.httpOptions = {
        timeout: 4800000
    };
    AWS.config.update({
        apiVersion: '2006-03-01',
        credentials: creds,
        region: region,
        useAccelerateEndpoint: true
    });
    return new AWS.S3();
}
function auditKitEvent(eventValue) {
    var updateValue = {
        pageStatusCode: eventValue
    };
    var aUrl = kitUrl + kitId + '/history';
    return new Promise(function (resolve, reject) {
        var authorizationToken = 'Bearer ' + storedOuauthValue;
        $.ajax({
            type: 'POST',
            beforeSend: function beforeSend(request) {
                request.setRequestHeader("Content-Type", 'application/json');
                request.setRequestHeader("Authorization", authorizationToken);
                request.setRequestHeader("caporg-correlation-id", guid());
            },
            url: aUrl,
            data: JSON.stringify(updateValue),
            success: function success(rsp) {
                resolve(rsp);
            }
        });
    });
}

function confirmIndexed(fw) {
    return new Promise( function(resolve, reject)  {
        var aUrl = kitUrl + kitId + '/files?file=' + fw.fileName;
        var authorizationToken = 'Bearer ' + storedOuauthValue;
        $.ajax({
            type: 'GET',
            beforeSend: function beforeSend(request) {
                request.setRequestHeader("Content-Type", 'application/json');
                request.setRequestHeader("Authorization", authorizationToken);
                request.setRequestHeader("caporg-correlation-id", guid());
            },
            url: aUrl,
            success: function success(rsp) {
                resolve(rsp);
                console.log('indexing rsp', rsp);
                fw.indexed = rsp.indexed;
            }
        });
        setTimeout( function() {
            resolve(null);
        }, 45000);
    });
}

function guid() {
    var s4 = function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
