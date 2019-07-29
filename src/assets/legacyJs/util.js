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


