//////////////
// Settings //
//////////////
const path = require('path');

module.exports = (app) => {
    const env = process.env.NODE_ENV || 'dev';
    if (env == 'dev')
    	process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    const config = '../config/config-' + env + '.json';
    app.settings = require(path.join(__dirname, config));
};