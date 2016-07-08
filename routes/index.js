'use strict';

var express = require('express');
var frontend = require('./frontend');
var backend = require('./backend');
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
    app.use('/admin', backend);

    app.post('/register',
        function(req, res){
            res.render('login');
        });

    app.post('/login',
        passport.authenticate('local', { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('/');
        });

    app.get('/logout',
        function(req, res){
            req.logout();
            res.redirect('/');
        });
    // catch 404 and forward to error handler
    app.use(err404Handler.handle);
    // error handlers
    app.use(err500Handler.handle);
};