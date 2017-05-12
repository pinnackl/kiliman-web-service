/////////////
// Actions //
/////////////
module.exports = (app) => {
    app.actions = {
        gateway: require('./gateway')(app)
    }
};
