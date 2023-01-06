var createError = require('http-errors');
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const swaggerJSDOC = require("swagger-jsdoc")
const swaggerUI = require("swagger-ui-express")


const options = {
  definition: {
    openapi:'3.0.0',
    info:{
      title:"SIS progress",
      version: '1.0.0',
    },
    servers :[
      {
        url:"http://localhost:4000/"
      }
    ]
  },
  apis:['./routes/*.js']
} 

const swaggerSpec = swaggerJSDOC(options)  


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var verifyRouter = require('./routes/verify');
var loginRouter = require('./routes/login');
var sendResetPassword = require('./routes/sendResspassword')
var resetPassword = require('./routes/resetPassword')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerSpec))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use('/', indexRouter);
app.use('/register', usersRouter);
app.use('/verify', verifyRouter);
app.use('/login', loginRouter);
app.use('/resetPassword', resetPassword);
app.use('/sendResetPassword', sendResetPassword);


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
