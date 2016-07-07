/**
 * Main app config file.
 */

var OrientDB = require('orientjs');

var orientServer = OrientDB({
    host: 'localhost',
    port: 2424,
    username: 'root',
    password: 'root'
});

var freepeDB = orientServer.use({
    name: 'freepe',
    username: 'root',
    password: 'root'
});

module.exports = {
    development : {
        db   : freepeDB,
        port : 8080
    }
};
