const express = require('express');
const { createTodo, updateTodo } = require('./type');
const app = express();

app.use(express.json());

app.post('/todo', function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You send the wrong input"
        })
        return;
    }
    // we can also put this in mongodb 

})
app.get('/todos', function(req,res){

})
app.put('/completed', function(req,res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "You send the wrong input"
        })
        return;
    }


})

app.listen(3000);


