var express = require('express');
const path = require('path');
var app = express();
var fs=require('fs');
//var bodyParser = require('body-parser');
app.listen(8081);
app.use(express.urlencoded({
    extended : true 
}));
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

app.post("/add.html",function(req,res)
{
  var input=req.body.postdetail;
  fs.writeFile('txtfile.txt',input,function(err , data)
  {
    if(err)
    {
        res.send(err);
    }
    else
    {
        res.redirect('/');
    }
  })
})