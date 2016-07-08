'use strict';

var express = require('express');
var frontend = require('./frontend');
var backend = require('./backend');

/**
 * include error handlers
 * @type {exports|module.exports}
 */
var err404Handler = require('../handlers/err404Handler');
var err500Handler = require('../handlers/err500Handler');


module.exports.init = function (app) {
    app.use("/", frontend);
    app.use('/admin', backend);

    // catch 404 and forward to error handler
    app.use(err404Handler.handle);
    // error handlers
    app.use(err500Handler.handle);
};