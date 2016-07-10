'use strict';

var express = require('express');
var frontend = require('./frontend');
var dashboard = require('./dashboard');
var auth = require('./auth');
var api = require('./api');

/**
 * include error handlers
 * @type {exports|module.exports}
 */
var err404Handler = require('../handlers/err404Handler');
var err500Handler = require('../handlers/err500Handler');


module.exports.init = function (app) {
    app.use("/", frontend);
    app.use('/api', api);
    app.use('/dashboard', dashboard);
    app.use('/auth', auth);
    // catch 404 and forward to error handler
    app.use(err404Handler.handle);
    // error handlers
    app.use(err500Handler.handle);
};