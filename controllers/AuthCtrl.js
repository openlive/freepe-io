/**
 * Created by koc9n on 4/9/16.
 */
var passport = require('../configs/passport');

module.exports.login = function (req, res, next) {
    passport.authenticate('local', function (err, user) {
            console.log(req.user);
            if (user) {
                return res.json(user);
            } else {
                next(new Error("auth failed"));
            }
        },
        passport.loginUser)(req, res, req.next);
};

module.exports.register = function (req, res, next) {
    passport.register(req, res, function (err, user) {
        if (user) {
            return res.json(user);
        } else {
            next(new Error("auth failed"));
        }
    });
};

module.exports.logout = function (req, res, next) {
    passport.disconnect(req, res, next);
    if (user) {
        return res.json(user);
    } else {
        throw new Error("auth failed");
    }
};