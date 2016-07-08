/**
 * Created by koc9n on 4/9/16.
 */
"use strict";
var oDB = require('../models');

module.exports.findAll = function () {
    return oDB.models.user.find();
};
