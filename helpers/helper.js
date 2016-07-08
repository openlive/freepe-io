"use strict";

module.exports.catchError = function (err, next) {
    console.log(err);
    var error = new Error("Internal Error");
    error.message = err.message;
    error.error = err.error || err;
    next(error);
};