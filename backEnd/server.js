var express = require('express');
var mongodbClient =require('mongodb').MongoClient;

var app= express();

app.get('/ListCategories', function(req,res)
{
    mongodbClient.connect("mongodb://localhost:27017/",function(err,db){
        if (err) throw err;
        var dbo = db.db("ac_pipo");
        dbo.collection("categorias").findOne({}, function(err, result) {
          if (err) throw err;
          console.log(result.name);
          res.send(result);
          db.close();
        });    
});

});

app.get('/getQuestions',function(req,res){
    mongodbClient.connect("mongodb://localhost:27017/",function(err,db){
        if (err) throw err;
        var dbo = db.db("ac_pipo");
        dbo.collection("preguntas").findOne({}, function(err, result) {
          if (err) throw err;
          console.log(result.name);
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