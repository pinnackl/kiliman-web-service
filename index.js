
const express = require('express');
const colors = require('colors');
const app = express();

// Loading all server modules ...
require('./settings')(app);              console.log('[KWS]' . magenta, 'loading settings...' . cyan);
// require('./models')(app);                console.log('[KWS]' . magenta, 'loading models...' . cyan);
require('./middlewares')(app);           console.log('[KWS]' . magenta, 'loading middlewares...' . cyan);
require('./boot')(app);                  console.log('[KWS]' . magenta, 'loading initial boot scripts...' . cyan);
require('./actions')(app);               console.log('[KWS]' . magenta, 'loading actions..' . cyan);
require('./routes')(app);                console.log('[KWS]' . magenta, 'loading routes...' . cyan);
require('./helpers')(app);               console.log('[KWS]' . magenta, 'loading helpers...' . cyan);

console.log('[KWS]' . magenta, 'Listening on port' . cyan, `${app.settings.port}...` . red);
const httpd = app.listen(app.settings.port);