const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = '5be82c9623b457168aaa12cb';
var userId = '5be2d5424e16a1320b2508bf';
// if(!ObjectID.isValid(id)){
//   console.log('Id not valid');
// }
// Todo.find({
//   _id:id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found!');
//   }
//   console.log('Todo by Id', todo);
// }).catch((error) => {
//   console.log(error);
// });

User.findById(userId).then((user) => {
  if(!user){
    return console.log('UserId not found!');
  }
  console.log('User by Id', user);
}).catch((error) => {
  console.log(error);
})
