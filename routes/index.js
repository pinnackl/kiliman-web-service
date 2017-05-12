////////////
// Routes //
////////////
module.exports = (app) => {
	app.use('/gateway', require('./gateway')(app));
};
