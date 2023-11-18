var express = require('express');
var app = express();


//Routes
app.get("/", function(req,res){
    res.send("Hi there!");
});

app.get("/bye",function(req,res){
    res.send("GoodBye!")
});

app.get("/category",function(req,res){
    res.send("Add /subDomain in the URL and see the magic! ")
});

app.get("/category/:name",function(req,res){
    var name = req.params.name.toUpperCase();
    res.send("We know you are searching for " + name);
});

app.get("*",function(req,res){
    res.send("We are under construction, this route will be soon running!")
});

app.listen(3000, function(){
    console.log("Express App Started!!");
});