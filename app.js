//var createError = require('http-errors');
 var express = require('express');
 //var path = require('path');
 //var cookieParser = require('cookie-parser');
 //var logger = require('morgan');
 //var expressValidator = require('express-validator');
 //var flash = require('express-flash');
 //var session = require('express-session');
 //var bodyParser = require('body-parser');

 var mysql = require('mysql');
 var connection  = require('./lib/mysqldb');
 var index = require('./routes/index');
 var app = express();

// view engine setup
 app.use('/home', index);
app.listen(3000, function(){
    console.log('Server running at port 3000: http://127.0.0.1:3000')
})
 
module.exports = app;