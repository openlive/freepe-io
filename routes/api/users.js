/**
 * Created by koc9n on 4/9/16.
 */
var express = require('express');
var router = express.Router();
var userCtrl = require('../../controllers/UserCtrl');
router.get('/', userCtrl.getAll);
//router.get('/:id', userCtrl.get);
//router.put('/', userCtrl.create);
//router.post('/', userCtrl.update);
//router.delete('/', userCtrl.delete);

module.exports = router;
