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
