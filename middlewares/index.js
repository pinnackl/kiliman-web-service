/////////////////
// Middlewares //
/////////////////
module.exports = (app) => {
    app.use(require('./../middlewares/res'));
    app.middlewares = {
        bodyParser: require('body-parser'),
        ensureFields: require('./ensureFields')
    };
};