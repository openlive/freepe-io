'use strict';

var express = require('express');
var router = express.Router();

router.get("/", function (req, res) {
    res.render('admin', {title : 'backend'});
});

module.exports = router;
