const Router = require('express').Router;

module.exports = (app) => {
    let router = new Router();

    /////////////////////
    // API backend API //
    /////////////////////
    router.get('/apis',
        app.actions.gateway.apis
    );

    router.get('/api/show/:id',
        app.middlewares.bodyParser.json(),
        app.actions.gateway.apiShow
    );

    router.post('/api/create',
        app.middlewares.bodyParser.json(),
        app.actions.gateway.apiCreate
    );

    router.put('/api/update/:id',
        app.middlewares.bodyParser.json(),
        app.actions.gateway.apiUpdate
    );

    router.delete('/api/delete/:id',
        app.middlewares.bodyParser.json(),
        app.actions.gateway.apiDelete
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