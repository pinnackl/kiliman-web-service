module.exports = (app) => {
    return {
        // APIs
        apis,
        // Users
        users,
        // Config
        changes
    };

    /////////////////////
    // API backend API //
    /////////////////////
    function apis (req, res, next) {
        const headers = [
            {'header': 'X-Api-Key', 'value': app.settings.apiKey},
            {'header': 'X-Admin-Auth-Token', 'value': app.settings.adminWebToken},
        ];

        return app.helpers.ajax({
            url: `${app.settings.baseApi}/apis`,
            headers: headers
        })
        .then((e) => {
            res.setHeader('Content-Type', 'application/json');
            res.commit(e.responseText)
        })
        .catch((e) => {res.error(e)});
    }

    //////////////
    // User API //
    //////////////
    function users (req, res, next) {
        const headers = [
            {'header': 'X-Api-Key', 'value': app.settings.apiKey},
            {'header': 'X-Admin-Auth-Token', 'value': app.settings.adminWebToken},
        ];

        return app.helpers.ajax({
            url: `${app.settings.baseApi}/users`,
            headers: headers
        })
        .then((e) => {
            res.setHeader('Content-Type', 'application/json');
            res.commit(e.responseText)
        })
        .catch((e) => {res.error(e)});
    }

    ////////////////
    // Config API //
    ////////////////
    function changes (req, res, next) {
        const headers = [
            {'header': 'X-Api-Key', 'value': app.settings.apiKey},
            {'header': 'X-Admin-Auth-Token', 'value': app.settings.adminWebToken},
        ];

        return app.helpers.ajax({
            url: `${app.settings.baseApi}/config/pending_changes`,
            headers: headers
        })
        .then((e) => {
            res.setHeader('Content-Type', 'application/json');
            res.commit(e.responseText)
        })
        .catch((e) => {res.error(e)});
    }

};