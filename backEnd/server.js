var express = require('express');
var app= express();
var bcrypt = require('bcrypt');
var mongodbClient =require('mongodb').MongoClient;
var bodyParser= require('body-parser');
app.use(bodyParser.json()) 
var urlencodedParser = bodyParser.urlencoded({extended:false});


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

app.post('/login',function(req,res){
  mongodbClient.connect("mongodb://localhost:27017/",{ useNewUrlParser: true },function(err,db){
    if (err) throw err;
    var dbo = db.db("ac_pipo");
    dbo.collection("usuarios").findOne({usuario: req.body.usuario},function(err, result) {
    if(result === null){
        res.json("login invalid");
    }
    else if (result.usuario === req.body.usuario && result.contrasena === req.body.contrasena){
      res.json({profileData:result});
    } else {
      console.log("Credentials wrong");
      res.json("Login invalid");
    }
      db.close();
    });  
}); 
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("Example app listening at http://%s:%s", host, port);
 })