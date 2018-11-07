// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// Generating ObjectId for Document
// var obj = new ObjectID();
// console.log(obj);

// Using ES6 to create new variables from an object: Destructuring
// var user = {name:'Jignesh', age: 28};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {

  if(err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  //deleteMany
  // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('User').deleteMany({name:'Jignesh'}).then((result) => {
  //   console.log(result);
  // });


  //deleteOne
  // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });

  //5be218af4a6f474ffd7c7a63
  // db.collection('User').deleteOne({_id:new ObjectID('5be218af4a6f474ffd7c7a63')}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
  //   console.log(result);
  // });


  // db.collection('Todos').find({_id:new ObjectID('5be215ed3e2df84e7b4d1926')}).toArray().then( (docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) =>{
  //   console.log('Unable to fetch todos', error);
  // });
  // db.collection('Todos').find().count().then( (count) => {
  //   console.log('Todos');
  //   console.log('Total Todos: ', count);
  // }, (error) =>{
  //   console.log('Unable to fetch todos', error);
  // });
  //
  // db.collection('User').find({name:'Jignesh'}).count().then( (count) => {
  //   console.log('Users count');
  //   console.log('Total is: ', count);
  // }, (error) =>{
  //   console.log('Unable to fetch users', error);
  // });



  client.close();
})
