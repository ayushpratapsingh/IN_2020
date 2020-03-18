 var mysql=require('mysql');
 var config=require('../config');
//  var connection=mysql.createConnection({
//    host: config.database.host,
//    user: config.database.user,
//    password: config.database.password,
//    database: config.database.db,
//    port:config.database.port,
//    insecureAuth : true
//  });
// connection.connect(function(error){
//    if(!!error){
//      console.log("MYSQL - ERROR: "+error);
//    }else{
//      console.log('Connected!:)');
//    }
//  });
// module.exports = connection;

var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.db,
    port:config.database.port,
    insecureAuth : true,
    debug    :  true
});

module.exports=pool;