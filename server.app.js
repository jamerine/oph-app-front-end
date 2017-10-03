/* eslint no-var: 0 */

require('babel/register')({
  extensions: ['.js', '.jsx'],
  stage     : 0,
});

// Middleware function of app bundle
var initter = require('./app/bundles/app/initters/server');

// Bundle Settings
var config  = require('./config/server.app');


require('./server')(initter, config);
