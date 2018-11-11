const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res) => {
    console.log(req.body);
    var todo = new Todo({
      text: req.body.text
    });

    todo.save().then((doc) =>{
      res.send(doc);
    }, (error) =>{
      console.log(error);
      res.status(400).send(error);
    });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (error) => {
    res.status(400).send(error);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    res.status(404).send();
  }

  //Mongoose Call
  Todo.findById(id).then((todo) => {
    if(!todo){
      res.status(404).send();
    }
    res.send({todo});
  }).catch((error) => {
    res.status(400).send();
  });

});

app.listen(3000, ()=>{
  console.log('Started on port 3000');
});


module.exports = {app};
