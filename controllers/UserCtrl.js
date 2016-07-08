/**
 * Created by koc9n on 4/9/16.
 */
var userSrvc = require('../services/UserSrvc');
var helper = require('../helpers/helper');

module.exports.getAll = function (req, res, next) {
    userSrvc.getAll()
        .then(function (users) {
            return res.status(200).json(users);
        })
        .catch(function (err) {
            helper.catchError(err, next);
        });
};

module.exports.get = function (req, res, next) {
    userSrvc.get()
        .then(function (user) {
            return res.status(200).json(user);
        })
        .catch(function (err) {
            helper.catchError(err, next);
        });
};
