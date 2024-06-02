const express = require('express')

const app = express();


app.get("/health-checkup",function(req,res){
    const username = req.headers.username;
    const pass = req.headers.pass;
    const kidneyId = req.query.kidneyId;

    if(username != "vishal"  && pass != "vishal123"){
        res.status(400).json("Something is wrong with your inputs.")
        return
    }

    if(kidneyId != 1 && kidneyId !=2){
        res.status(400).json("Something again wrong with your inputs")
    }

    res.json("Your kidney is fine")



})

app.listen(3000);