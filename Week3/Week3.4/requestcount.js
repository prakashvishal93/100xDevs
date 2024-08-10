const express = require('express')
const app = express();

let requestCount = 0;
app.use(function(req,res,next){
    requestCount += 1;
    next(); 
})
app.get('/user1', function(req, res){
    res.status(200).json({
        msg: "I am John user1"
    })
})
app.get('/user2', function(req, res){
    res.status(200).json({
        msg: "I am John from user2"
    })
})
app.get('/user3', function(req, res){
    res.status(200).json({
        msg: "I am John user3"
    })
})
app.get('/requestcount', function(req, res){
    res.status(200).json({
        requestCount
    })  
})
app.listen(3000);

