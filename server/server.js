const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// Todo model
// var Todo = mongoose.model('Todo', {
//   text:{
//     type:String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed:{
//     type:Boolean,
//     default: false
//   },
//   completedAt:{
//     type: Number,
//     default: null
//   }
// });

// var newTodo = new Todo({
//   text:'Cook dinner'
// });
//
// newTodo.save().then((doc) =>{
//   console.log('Save to do ', doc);
// },(error) =>{
//   console.log('Unable to save Todo', error);
// });

// var otherTodo = new Todo({
//   text: ' Edit this file '
// });
//
// otherTodo.save().then((doc) =>{
//   console.log('Save to do ', doc);
// },(error) =>{
//   console.log('Unable to save Todo', error);
// });


// User Model

var User = mongoose.model('User', {
  email:{
    type:String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var newUser = new User({
  email: ' test@test.com '
});

newUser.save().then((doc) =>{
  console.log('Save user ', doc);
},(error) =>{
  console.log('Unable to save user', error);
});
