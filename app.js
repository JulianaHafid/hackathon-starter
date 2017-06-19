import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
// import favicon from 'serve-favicon';
import path from 'path';
import lessMiddleware from 'less-middleware';
import index from './routes/index';


const app = express();
//const debug = Debug('wdi-p-2:app');

// Connect to mongo
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/mumAssist');

import User from './models/user';

//A flight from CDG France to JFK New-York, USA on American Airlines with no passengers.
//Assign this object to variable "flight1"

let user1 = new User ({
    email: 'julie@abc.com',       //user's email address
    password: '1234',                            //user's password
    firstname: 'Simone',                           //user's firstname
    lastname: 'Jr',                            //user's lastname
    gender: 'female',                              //user's gender
    //dob: Date                                    //user's date of birth
  });

//a callback because you want to check on the error IMMEDIATELY after you create the Flight object
user1.save((err) => {
    if(err){
      console.log (err.message);
      return;
    }
    console.log ('User 1 has been created');   //output to terminal
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/login', require('./routes/login'));
app.use('/signup', require('./routes/signup'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err);
  process.exit(1);
});

export default app;
