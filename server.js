var express  = require('express');
var http = require('http');

var app = express();

var env = process.env.NODE_ENV || 'development';
var config = require('./configs/config')[env];
var port  = process.env.PORT || config.port || 8080;

/**
 * Provide settings to the default Express app.
 */
require('./configs/app')(app);

/**
 * Init server with main app settings and deploy it on the provided port.
 */
var server = http.createServer(app);
server.listen(port)
    .on('listening', function () {
        console.log('Server running on ' + port);
    })
    
    .on('error', function (error) {
        console.error('Error occured: ' + error.message);
    });

