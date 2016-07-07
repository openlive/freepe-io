var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var endpoints = require('../endpoints');

/**
 * Express app setup
 */
module.exports = function (app) {

    /**
     * Indexes app's routes.
     */
    app.use('/', endpoints);

    /**
     * Logs requests directly on the console.
     */
    app.use(logger('development'));

    /**
     * Reads cookies from requests.
     */
    app.use(cookieParser());

    /**
     * Parses request data.
     */
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
};
