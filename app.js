var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerJSDOC = require("swagger-jsdoc")
const swagerUI = require("swagger-ui-express")


const options = {
  definition: {
    openapi:'3.0.0',
    info:{
      title:"SIS progress",
      version: '1.0.0',
    },
    servers :[
      {
        api:"http://164.90.224.111"
      }
    ]
  },
  apis:['./config/config.json']
}

const swagerSpec = swaggerJSDOC(options)  

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var verifyRouter = require('./routes/verify');
var loginRouter = require('./routes/login');
var resetPassword = require('./routes/resetPassword')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/swagger-api",swagerUI.serve,swagerUI.setup(swagerSpec))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/register', usersRouter);
app.use('/verify', verifyRouter);
app.use('/login', loginRouter);
app.use('/resetPassword', resetPassword);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
