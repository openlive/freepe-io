/**
 * Created by koc9n on 4/9/16.
 */
/**
 * internal error handler
 */
module.exports.handle = function (err, req, res, next) {
    console.log("|| ERROR HANDLER ||");
    console.log(err);

    res.status(err.status || 500);

    var result = {
        message: err.message,
        error: err.error || err// include stacktrace for Dev mode
    };

    if (req.xhr) {
        return res.json(result);
    } else {
        return res.render("error", result);
    }
};