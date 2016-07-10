/**
 * Created by koc9n on 7/8/2016 AD.
 */
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var validator = require('validator');
var crypto = require('crypto');
var oDB = require('../models');

passport.loginUser = function (req, identifier, password, next) {
    console.log(identifier);
    console.log(password);
    console.log(next);
    console.log("---")
    var isEmail = validator.isEmail(identifier)
        , query = {};

    if (isEmail) {
        query.email = identifier;
    }
    else {
        query.username = identifier;
    }

    oDB.db.models.user.findOne(query)
        .populate('passports')
        .exec(function (err, user) {
            if (err) {
                return next(err);
            }

            if (!user) {
                if (isEmail) {
                    return next(new Error('Error.Passport.Email.NotFound'));
                } else {
                    return next(new Error('Error.Passport.Username.NotFound'));
                }

                return next(null, false);
            }

            oDB.db.models.passport.findOne({
                protocol: 'local',
                user: user.id
            }).populate('user')
                .exec(function (err, passport) {
                    if (passport) {
                        passport.validatePassword(password, function (err, res) {
                            if (err) {
                                return next(err);
                            }

                            if (!res) {
                                return next(null, false);
                            } else {
                                return next(null, user, passport);
                            }
                        });
                    }
                    else {
                        return next(null, false);
                    }
                });
        });
};

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
    oDB.db.models.user.findById(id, function (err, user) {
        if (err) {
            return cb(err);
        }
        cb(null, user);
    });
});

passport.register = function (req, res, next) {
    var email = req.body.email || req.query.email
        , username = req.body.username || req.query.username
        , password = req.body.password || req.query.password;

    if (!email) {
        return next(new Error('No email was entered.'));
    }

    if (!username) {
        return next(new Error('No username was entered.'));
    }

    if (!password) {
        return next(new Error('No password was entered.'));
    }

    oDB.db.models.user.create(
        {
            username: username,
            email: email
        }
    ).populate('passports')
        .exec(function (err, user) {
            if (err) {
                if (err.code === 'E_VALIDATION') {
                    if (err.invalidAttributes.email) {
                        return next(new Error('Error.Passport.Email.Exists'));
                    } else {
                        return next(new Error('Error.Passport.User.Exists'));
                    }
                }

                return next(err);
            }

            // Generating accessToken for API authentication
            var token = crypto.randomBytes(48).toString('base64');

            oDB.db.models.passport.create({
                protocol: 'local'
                , password: password
                , user: user.id
                , accessToken: token
            }, function (err, passport) {
                if (err) {
                    if (err.code === 'E_VALIDATION') {
                        return next(new Error('Error.Passport.Password.Invalid'));
                    }

                    return user.destroy(function (destroyErr) {
                        next(destroyErr || err);
                    });
                }

                oDB.db.models.user.findOne(user.id).populate('passports').exec(next);
            });
        });
};


passport.use(new Strategy(
    {
        passReqToCallback: true,
        usernameField: 'identifier'
    }, passport.loginUser
));

module.exports = passport;