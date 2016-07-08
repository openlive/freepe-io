'use strict';

var express = require('express');
var users = require('./users');
var router = express.Router();

router.use("/users", users);

router.get("/", function (req, res) {
    res.render('home', {title : 'frontend'});
});

module.exports = router;
