var express = require('express');
var pool=require('../lib/mysqldb')
var router = express.Router();
 
 //var connection=require('../lib/mysqldb');
// SHOW LIST OF USERS
router.get('/main/', function(req, res, next)
 {
 pool.getConnection(function(err,connection)
 	{
        if (err) {
          res.send({"code" : 100, "status" : "Error in connection database","Desc":err});
          return;
        }
        else
        {
			connection.query('SELECT * FROM gateway_transactions LIMIT 2;',function(err,rows)     {
 			if(err)
 			{
 					res.send("Query Error:"+err);
 			}
        	else
        		{ 
            	res.json(rows);
        		}            
         });
		}
	});
});
 module.exports = router;

  