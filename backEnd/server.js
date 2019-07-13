var express = require('express');
var mongodbClient =require('mongodb').MongoClient;

var app= express();

app.get('/ListCategories', function(req,res)
{
    mongodbClient.connect("mongodb://localhost:27017/",{ useNewUrlParser: true },function(err,db){
        if (err) throw err;
        var dbo = db.db("ac_pipo");
        dbo.collection("categorias").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        });    
    });
});

app.get('/getQuestions',function(req,res){
    mongodbClient.connect("mongodb://localhost:27017/",{ useNewUrlParser: true },function(err,db){
        if (err) throw err;
        var dbo = db.db("ac_pipo");
        dbo.collection("preguntas").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        });  
    }); 
});



var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("Example app listening at http://%s:%s", host, port);
 })