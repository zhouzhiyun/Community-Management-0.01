
const express = require('express');
const fs = require('fs');
const bodyParser = require("body-parser");
const app = express();
const axios = require('axios');

app.use(express.static('dist'));
app.use(express.static('src'));

// const xlsx = require('node-xlsx');
// var obj = xlsx.parse('./src/data/居民信息表15-18栋1103.xls');
// console.log(JSON.stringify(obj));

app.use(bodyParser.json({limit:'100mb'}));



app.post('/home',function(req,res){
    let json = req.body;
    fs.open('./src/data/info.json','r+',function(err,fd){
        if(err){
            console.log(err)
        }else{
            fs.writeFile('./src/data/info.json', JSON.stringify(json), function(err){
                if(err){
                    console.log(err)
                }else{
                    fs.close(fd, function(err){
                        if (err){
                            console.log(err);
                        } 
                        });
                }
                
            })
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
            
app.post('/events',function(req,res){
    fs.open('./src/data/events.json','r+',function(err,fd){
        if(err){
            console.log(err);
        }else{
            fs.readFile('./src/data/events.json', function (err, data) {
                if (err) {
                    return console.error(err);
                }else {
                    res.send(data.toString());
                    fs.close(fd,function(err){
                        if(err) console.log(err);
                    })
                }
                
             });
        }
    })
});   

app.post('/saveEvent',function(req,res){
    var data=req.body;
    fs.open('./src/data/events.json','r+',function(err,fd){
        if(err){
            console.log(err);
        }else{
            fs.writeFile('./src/data/events.json', JSON.stringify({event:data}),function (err) {
                if (err) {
                    return console.error(err);
                }else {
                    
                    fs.close(fd,function(err){
                        if(err) console.log(err);
                    })
                }
                
             });
        }
    })
});   

app.post('/getString',function(req,res){
    
    fs.open('./src/data/info.json','r+',function(err,fd){
        if(err){
            console.log(err)
        }else{
            fs.readFile('./src/data/info.json', function (err, data) {
                if (err) {
                    return console.error(err);
                }else {
                    res.send(data.toString())
                    fs.close(fd,function(err){
                        if(err) console.log(err);
                    })
                }
                
            });
        }
    })
});

app.post('/getUserInfo',function(req,res){
    fs.open('./src/data/userinfo.json','r+',function(err,fd){
        if(err){
            console.log(err)
        }else{
            fs.readFile('./src/data/userinfo.json', function (err, data) {
                if (err) return console.error(err);
                res.send(data.toString())
                fs.close(fd,function(err){
                if(err) console.log(err);
            })
            });
        }
    })
});


app.get('/excel',function(req,res){
    
});


app.listen(80, function(){

});