let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

//modules for authentecation
let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');

// database setup
let mongoose = require('mongoose');
let DB = require('./db');

//Point Monngoose
mongoose.connect(DB.URI);

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', () => {
  console.log("Connected to MongoDB...")
})
let indexRouter = require('../routes/index');
let contactRouter = require('../routes/contact');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// setup express
app.use(session({
  secret: "SomeScecret",
  saveUninitialized: false,
  resave: false
}));

// intialize flash
app.use(flash());

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// passport user configuration

// create a User model
let userModel = require('../models/user');
let User = userModel.User;

//serialize and desrialize the User info 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//implement a User authentication strategy
passport.use(User.createStrategy());

// serialize and desrialize the User info




app.use('/', indexRouter);
app.use('/contact-list', contactRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
