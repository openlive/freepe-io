/**
 * Created by koc9n on 5/28/2016 AD.
 */

var userDao = require('../dao/UserDAO');

module.exports.getAll = function () {
    return userDao.findAll();
};