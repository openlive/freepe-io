'use strict';

var express = require('express');
var users = require('./../api/users');
var router = express.Router();

router.get("/", function (req, res) {
    res.render('home', {layout: false, title: 'frontend'});
});

module.exports = router;
