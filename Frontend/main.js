var express = require('express');
const path = require('path');
var app = express();
app.listen(3000);
app.get("/",function(req,res)
{
    
    res.sendFile(__dirname+'/index.html');
})
app.get("/add.html",function(req,res)
{
    res.sendFile(__dirname+'/add.html');
})
app.get("/remove.html",function(req,res)
{
    res.sendFile(__dirname+'/remove.html');
})