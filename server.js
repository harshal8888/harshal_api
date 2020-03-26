
var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'school'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

//rest api to display
app.get('/activated', function (req, res) {
    connection.query('select * from activated', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
app.get('/notices', function (req, res) {
    connection.query('select * from notices', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
 app.get('/holidays', function (req, res) {
    connection.query('select * from holidays', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });

app.get('/news_latters', function (req, res) {
    connection.query('select * from news_latters', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
 app.get('/polls', function (req, res) {
    connection.query('select * from polls', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
 app.get('/events', function (req, res) {
    connection.query('select * from events', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
 app.get('/driver', function (req, res) {
    connection.query('select * from driver', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
 app.get('/teacher', function (req, res) {
    connection.query('select * from teacher', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
 app.get('/drivers', function (req, res) {
    connection.query('select * from drivers', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
 app.get('/helper', function (req, res) {
    connection.query('select * from helper', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
 app.get('/classroom', function (req, res) {
    connection.query('select * from classroom', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
 app.get('/students', function (req, res) {
    connection.query('select * from students', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
 

//rest api to insert 
 app.post('/notices', function (req, res) {
    var params  = req.body;
    console.log(params);
    connection.query('INSERT INTO notices SET ?', params, function (error, results, fields) {
     if (error) throw error;
     res.end(JSON.stringify(results));
   });
 });
 app.post('/holidays', function (req, res) {
    var params  = req.body;
    console.log(params);
    connection.query('INSERT INTO holidays SET ?', params, function (error, results, fields) {
     if (error) throw error;
     res.end(JSON.stringify(results));
   });
 });
 app.post('/news_latters', function (req, res) {
    var params  = req.body;
    console.log(params);
    connection.query('INSERT INTO news_latters SET ?', params, function (error, results, fields) {
     if (error) throw error;
     res.end(JSON.stringify(results));
   });
 }); app.post('/polls', function (req, res) {
    var params  = req.body;
    console.log(params);
    connection.query('INSERT INTO polls SET ?', params, function (error, results, fields) {
     if (error) throw error;
     res.end(JSON.stringify(results));
   });
 }); app.post('/events', function (req, res) {
    var params  = req.body;
    console.log(params);
    connection.query('INSERT INTO events SET ?', params, function (error, results, fields) {
     if (error) throw error;
     res.end(JSON.stringify(results));
   });
 }); app.post('/driver', function (req, res) {
    var params  = req.body;
    console.log(params);
    connection.query('INSERT INTO driver SET ?', params, function (error, results, fields) {
     if (error) throw error;
     res.end(JSON.stringify(results));
   });
 }); app.post('/helper', function (req, res) {
    var params  = req.body;
    console.log(params);
    connection.query('INSERT INTO helper SET ?', params, function (error, results, fields) {
     if (error) throw error;
     res.end(JSON.stringify(results));
   });
 }); app.post('/classroom', function (req, res) {
    var params  = req.body;
    console.log(params);
    connection.query('INSERT INTO classroom SET ?', params, function (error, results, fields) {
     if (error) throw error;
     res.end(JSON.stringify(results));
   });
 }); app.post('/students', function (req, res) {
    var params  = req.body;
    console.log(params);
    connection.query('INSERT INTO students SET ?', params, function (error, results, fields) {
     if (error) throw error;
     res.end(JSON.stringify(results));
   });
 }); 
 app.post('/activated', function (req, res) {
    var params  = req.body;
    console.log(params);
    connection.query('INSERT INTO activated SET ?', params, function (error, results, fields) {
     if (error) throw error;
     res.end(JSON.stringify(results));
   });
 }); 


//  //rest api to update record into mysql database
// app.put('/activated/:id', function (req, res) {
//     console.log(req.body);
//     connection.query('UPDATE `activated` SET `api_key_activated`=?,`key`=?, where `id`=?', [req.body.api_key_activated,req.body.key,req.body.id], function (error, results, fields) {
//        if (error) throw error;
//        res.end(JSON.stringify(results));
//      });
//  });
  app.put('/activated/:id',(req, res) => {
    let sql = "UPDATE activated SET api_key_activated='"+req.body.api_key_activated+"', key='"+req.body.key+"' WHERE id="+req.params.id;
    let query = connection.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });
   
//Delete product
app.delete('/activated/:id',(req, res) => {
    let sql = "DELETE FROM activated WHERE id="+req.params.id+"";
    let query = connection.query(sql, (err, results) => {
      if(err) throw err;
        res.end(JSON.stringify(results));
    });
  });
//rest api to delete record from mysql database
// app.delete('/activated', function (req, res) {
//     var params  = req.body;
//     connection.query('DELETE FROM `activated` WHERE `id`= ?', [req.body.id], function (error, results, fields) {
//        if (error) throw error;
//        res.end('Record has been deleted!');
//      });
//  });
  app.listen(3000,function(){
    console.log("Started on PORT 3000");
  })