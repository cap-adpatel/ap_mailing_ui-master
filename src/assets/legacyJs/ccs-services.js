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
