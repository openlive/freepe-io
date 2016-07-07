var express = require('express');
//var users = require('../controllers/users');
var router = express.Router();

/**
 * User related endpoints.
 */
//router.get('/', users.list);
router.get('/', function (req, res, next) {
    res.status(200)
        .send('Users responded!')
        .end();
});

module.exports = router;
