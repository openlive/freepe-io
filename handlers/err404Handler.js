/**
 * Created by koc9n on 4/9/16.
 */
var express = require('express');
module.exports.handle = function (req, res, next) {
    console.log("|| used 404 error handler ||");
    var err = {message: "Not found", status: 404};

    if (req.xhr) {
        res.status(404).json(err);
    } else {
        res.status(404).render('error', {
            message: err.message,
            error: err // include stacktrace for Dev mode
        });
    }
};