/**
 * Created by koc9n on 4/9/16.
 */
var db = require('../models');
var User = db.models.user;

module.exports.findAll = function () {
    return User.find();
};
