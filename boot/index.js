//////////
// Boot //
//////////
module.exports = (app) => {
    app.use(app.middlewares.bodyParser.urlencoded({ extended: true }));

    // CORS
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    return;
};