
const express = require('express');
const fs = require('fs');
const bodyParser = require("body-parser");
const app = express();
const axios = require('axios');
app.use(express.static('dist'));
app.use(express.static('src'));


app.use(bodyParser.json({limit:'100mb'}));


app.post('/home',function(req,res){

    fs.open('./src/data/info.json','r+',function(err,fd){
        if(err){
            console.log(err)
        }else{
            fs.readFile('./src/data/info.json', function (err, data) {
                if (err) {
                    return console.error(err);
                }else {
                    
                }
                res.send(data.toString())
             });
        }
    })
});


app.post('/getDB',function(req,res){
    fs.open('./src/data/info.json','r+',function(err,fd){
        if(err){
            console.log(err)
        }else{
            fs.readFile('./src/data/info.json', function (err, data) {
                if (err)  return console.error(err);
                
                res.send(data.toString());
                fs.close(fd);
            });
        }
    });
});


app.post('/entering', function(req,res){
    console.log(req.body);

    fs.open('./src/data/info.json','r+',function(err,fd){
        if(err){
            console.log(err)
        }else{
            fs.writeFile('./src/data/info.json', JSON.stringify(req.body),function (err) {
                if (err) return console.error(err);
                fs.close(fd);
            });
        }
    });

});


app.listen(80, function(){

});