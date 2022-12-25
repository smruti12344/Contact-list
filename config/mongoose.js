// // set libery
// const mongoose = require('mongoose');
// // connect to the database
// mongoose.set('strictQuery', true);
// mongoose.connect('mongodb://localhost/CONTACTLIST');
// // accuring the connection (to check if it successfull)
// const db = mongoose.connection;
// // error
// db.on('error',function(){
//     console.log("error connecting to db");
// });
// // up and running then print message
// db.once('open',function(){
//     console.log("Successfully connect to data base");
// });
// module.exports= db;
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Contactlist:TmlZhe6mLkhjegEG@cluster0.xtzwmy6.mongodb.net/?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/contactlist');
const db = mongoose.connection;

`mongoose.set('strictQuery', false);`


db.on("error", function(){
    console.log("error in connecting to database");
    return;
})

db.once("open", function(){
    console.log("connected to database");
})