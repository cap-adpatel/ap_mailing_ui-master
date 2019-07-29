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
        const onlyFwForUpload = fileWrapperList.filter(function(fw) {
            return fw.file !== null
        });
        if (onlyFwForUpload && onlyFwForUpload.length > 0) {
            runSerial(onlyFwForUpload)
                .then(function() {
                console.log('fwPromises --->', onlyFwForUpload);
                const indexPromises = onlyFwForUpload.map( function(fu) {
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
