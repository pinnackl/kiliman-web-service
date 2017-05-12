module.exports = (app) => {
    return {
        // APIs
        apis,
        apiShow,
        apiCreate,
        apiUpdate,
        apiDelete,
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

    function apiShow (req, res, next) {
        const headers = [
            {'header': 'X-Api-Key', 'value': app.settings.apiKey},
            {'header': 'X-Admin-Auth-Token', 'value': app.settings.adminWebToken},
        ];

        return app.helpers.ajax({
            url: `${app.settings.baseApi}/apis/${req.params.id}`,
            headers: headers
        })
        .then((e) => {
            res.setHeader('Content-Type', 'application/json');
            res.commit(e.responseText)
        })
        .catch((e) => {res.error(e)});
    }

    function apiCreate (req, res, next) {
        const headers = [
            {'header': 'Content-Type', 'value': 'application/json'},
            {'header': 'X-Api-Key', 'value': app.settings.apiKey},
            {'header': 'X-Admin-Auth-Token', 'value': app.settings.adminWebToken},
        ];

        return app.helpers.ajax({
            url: `${app.settings.baseApi}/apis`,
            type: 'POST',
            headers: headers,
            data: JSON.stringify(req.body)
        })
        .then((e) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(201).send(e.responseText);
        })
        .catch((e) => {res.error(e)});
    }

    function apiUpdate (req, res, next) {
        const headers = [
            {'header': 'Content-Type', 'value': 'application/json'},
            {'header': 'X-Api-Key', 'value': app.settings.apiKey},
            {'header': 'X-Admin-Auth-Token', 'value': app.settings.adminWebToken},
        ];

        return app.helpers.ajax({
            url: `${app.settings.baseApi}/apis/${req.params.id}`,
            type: 'PUT',
            headers: headers,
            data: JSON.stringify(req.body)
        })
        .then((e) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(204).send(e.responseText);
        })
        .catch((e) => {res.error(e)});
    }

    function apiDelete (req, res, next) {
        const headers = [
            {'header': 'X-Api-Key', 'value': app.settings.apiKey},
            {'header': 'X-Admin-Auth-Token', 'value': app.settings.adminWebToken}
        ];

        return app.helpers.ajax({
            url: `${app.settings.baseApi}/apis/${req.params.id}`,
            type: 'DELETE',
            headers: headers
        })
        .then((e) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(204).send(e.responseText);
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