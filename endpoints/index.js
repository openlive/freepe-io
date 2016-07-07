var express = require('express');
var users = require('./users');

var router = express.Router();

/**
 * General logic modules endpoints.
 */
router.use('/users', users);

/**
 * Main index endpoint "/".
 */
router.get('/', function(req, res, next) {
    res.status(200)
        .send('Hello world!')
        .end();
});

module.exports = router;
