'use strict';

var express = require('express');
var users = require('./../api/users');
var path = require("path");
var router = express.Router();

router.get("/", function (req, res) {
    res.redirect('/#/');
    //res.sendFile(path.join(__dirname+'/public/index.html'));
});

module.exports = router;
