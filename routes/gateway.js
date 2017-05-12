const Router = require('express').Router;

module.exports = (app) => {
    let router = new Router();

    /////////////////////
    // API backend API //
    /////////////////////
    router.get('/apis',
        app.actions.gateway.apis
    );

    router.post('/api/create', () => {}
    );

    router.get('/api/show/{id}', () => {}
    );

    router.put('/api/update/{id}', () => {}
    );

    //////////////
    // User API //
    //////////////
    router.get('/users',
        app.actions.gateway.users
    );

    ////////////////
    // Config API //
    ////////////////
    router.get('/changes',
        app.actions.gateway.changes
    );

    return router;
};