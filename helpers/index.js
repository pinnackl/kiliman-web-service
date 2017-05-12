const XMLHttpRequest  = require("xmlhttprequest").XMLHttpRequest;

module.exports = (app) => {
    app.helpers = {
        ensureOne,
        empty,
        reject,
        ensureEmpty,
        ajax
    };


    function reject(code, message) {
        return () => {
            return Promise.reject({
                code: code,
                message: message
            });
        };
    }

    function ensureEmpty(data) {
        return (!data || data.length == 0) ? data : Promise.reject()
    }

    function ensureOne(data) {
        return (data) ? data : Promise.reject();
    }

    function empty(data) {
        return (data) ? null : data
    }

    /**
     * [ajax description]
     * @param  {[type]} url
     * @param  {[type]} type
     * @param  {[type]} data
     * @param  {[type]} callback
     * @param  {[type]} failure
     * @param  {[type]} headers
     * @return {[type]}
     */
     function ajax (param) {
        var url         = typeof param.url !== 'undefined' ? param.url  : "/";
        var type        = typeof param.type !== 'undefined' ? param.type  : "GET";
        var data        = typeof param.data !== 'undefined' ? param.data  : {};
        var headers     = typeof param.headers !== 'undefined' ? param.headers  : [{'header': 'X-Requested-With', 'value': 'XMLHttpRequest'}];
        var user        = typeof param.user !== 'undefined' ? param.user  : null;
        var password    = typeof param.password !== 'undefined' ? param.password  : null;
        var async       = typeof param.async != 'undefined' ? param.async : true;

        // Promise fallback
        var callback    = typeof param.callback !== 'undefined' ? param.callback  : function () {};
        var failure     = typeof param.failure !== 'undefined' ? param.failure  : function () {};

        var promise = new Promise(function (resolve, reject) {
            
            // Init the XHR request object
            var request = new XMLHttpRequest();
            request.open(type, url, async, user, password);

            // Set custom headers
            for (var i = 0; i < headers.length; i++) {
                request.setRequestHeader(headers[i].header, headers[i].value);
            }

            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    // Success!
                    resolve(request);
                } else {
                    // Error!
                    console.error("Error:", request.status);
                    reject(request);
                }
            };

            request.onerror = function () {
                reject(this.statusText);
            };

            request.send(data);
        });

        return promise;
    }
};