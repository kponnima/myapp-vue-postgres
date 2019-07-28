import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';

import schema from './server/graphql/bookSchemas';

// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var graphqlHTTP = require('express-graphql');
// var schema = require('./server/graphql/bookSchemas');
// var cors = require('cors');

// var indexRouter = require('./server/routes/index');
// var usersRouter = require('./server/routes/users');

import indexRouter from './server/routes/index';
// import main from './src/main';

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './src/public')));
// app.use('/', express.static(path.join(__dirname, '../../dist/myapp')));
// app.use('/', function(req, res) {
//   res.sendfile(path.join(__dirname, './src/public/index.html'));
// });
app.use('/', indexRouter);
app.use('*', cors());
app.use('/graphql', cors(), graphqlHTTP({
  schema: schema,
  rootValue: global,
  graphiql: true,
}));

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

// module.exports = app;
export default app;