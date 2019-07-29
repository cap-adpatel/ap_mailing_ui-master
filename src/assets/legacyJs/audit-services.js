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
