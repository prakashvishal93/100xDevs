const mongoose = require('mongoose')
// mongodb+srv://admin:XCwtyIglw0zTNWvA@cluster0.5ordz.mongodb.net/

mongoose.connect("mongodb+srv://admin:XCwtyIglw0zTNWvA@cluster0.5ordz.mongodb.net/");

const todoSchema = mongoose.Schema({
    title : String, 
    description : String, 
    completed : Boolean
})

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}