var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

var OrientDB = require('orientjs');

var server = OrientDB({
    host: 'localhost',
    port: 2424,
    username: 'root',
    password: 'root'
});

var db = server.use({
    name: 'freepe',
    username: 'root',
    password: 'root'
});
console.log('Using database: ' + db.name);

//TEMPLATE TO INSERT DATA IN DATABASE
/*db.query('insert into User (name, password, login, email) values (:name, :password, :login, :email)',
 {
 params: {
 name: 'Bogdan',
 password: '123456',
 login: 'bnekras',
 email: 'bnekras.pm@gmail.com'
 }
 }
 ).then(function (response){
 console.log(response); //an Array of records inserted
 });*/

// CLOSE THE CONNECTION AT THE END 
db.close();