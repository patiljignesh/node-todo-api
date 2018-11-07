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

  //findOneAndUpdate
  //5be2abf1acf7895b6f813cc0
  // db.collection('Todos').findOneAndUpdate(
  // {
  // _id: new ObjectID('5be2abf1acf7895b6f813cc0')
  // },
  // {
  //   $set:
  //   {
  //     completed: true
  //   }
  // },
  // {
  //   returnOrignal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  //5be2ad80acf7895b6f813d18
  db.collection('User').findOneAndUpdate(
  {
  _id: new ObjectID('5be2ad80acf7895b6f813d18')
  },
  {
    $set:
    {
      name: 'Jignesh'
    },
    $inc:
    {
      age: 1
    }
  },
  {
    returnOrignal: false
  }).then((result) => {
    console.log(result);
  });

  client.close();
})
