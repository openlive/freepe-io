/**
 * Created by koc9n on 7/10/2016 AD.
 */
var express = require('express');
var users = require('./../api/users');
var router = express.Router();
var AuthCtrl = require('../../controllers/AuthCtrl');

router.post("/login", AuthCtrl.login);

router.put("/register", AuthCtrl.register);

router.delete('/logout', AuthCtrl.logout);

module.exports = router;
