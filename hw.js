var express = require('express');
var app = express();

app.get("/",function(req,res){
    res.send("Hi there! Welcome");
});

app.get("/sound",function(req,res){
    res.send("We have few animal's sound. Add a slash with animal's name in url");
});

app.get("/sound/:animal",function(req,res){
    var ani = req.params.animal.toLowerCase();
    var sound;
    if (ani == "cat")
        sound = "meow meow..";
    else if (ani == "dog")
        sound = "woof woof!";
    else
        sound = ani + "'s sound is not yet recognised by us! "
    
    res.send(sound);
});

app.get("/repeat/:animal/:num",function(req,res){
    var ani = req.params.animal.toLowerCase();
    var sound, result="";
    var n= Number(req.params.num);
    if (ani == "cat")
        sound = "meow";
    else if (ani == "dog")
        sound = "woof";
    else
        sound = "";
    
    for(var i=0;i<n;i++){
        result+= sound + " ";
    }
    res.send(result);
});

app.listen(3001,function(){
    console.log("Listening to 3001!")
});