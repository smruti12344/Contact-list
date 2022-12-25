// requring laibery
// express laibery used

const express =require('express');
const port = 8000;
const app = express();
const path =require('path');
// const { title } = require('process');

// access the config 

// const db = require("./config/mongoose");
const db = require('./config/mongoose');
// access the schema
const Contact = require('./config/models/contact');
// send data to router
app.set('view engine','ejs');
// change the directory
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use(express.static('assets'));
console.log("hii");
// // middlelware process
// app.use(function(req,res,next){
//     console.log("middlware1");
//     next();
// });
// // middlelware2 process
// app.use(function(req,res,next){
//     console.log("middlware2");
//     next();
// });
// add the data to browser dynamic ways
var contactlist = [
    {
        Name:"lipa",
        phone:"1658954656"
    },
    {
        Name:"gopi",
        phone:"5454848484"
    },
    {
        Name:"pupun",
        phone:"45454874848"
    }
]

app.get('/', function(req,res){
    // show the directory
    // console.log(__dirname);
    // res.send('<h1>cool it is running or it!</h1>');
    

// add detail dynamic 
// router name crete_contact
 
// fetch database to home page
Contact.find({},function(err,Contacts){
    if(err){
        console.log("Error in fething database");
        return;
    }
    return res.render('home',{
        title:"my contact list",
        contact_list:Contacts

    });

})
    // set tilte using title

    // return res.render('home',{
    //     title:"my contact list",
    //     contact_list:contactlist

    // });
  
});
app.post('/creat-contact',function(req,res){
    // return res.redirect('/practice');
    // console.log(req.body);
    // console.log(req.body.Name);
    // console.log(req.body.phone);
  //  add data  to this page

//   data store
//     contactlist.push({
//         Name:req.body.Name,
//         phone:req.body.phone
//     });
//     contactlist.push(req.body);

// store in database
Contact.create({
    name: req.body.Name,
    phone:req.body.phone
//    check any err
}, function(err,newContact){
    if(err){
        console.log('error in creating contact');
        return;
    }
    console.log('***********',newContact);
    
});

    return res.redirect('/');
 });


// for delete contact
app.get('/delet-contact/',function(req,res){
    // console.log(req.query);
    // let phone=req.query.phone;
    // let contactIndex = contactlist.findIndex(contact=> contact.phone == phone);
    // if(contactIndex!=-1){
    //     contactlist.splice(contactIndex,1);
    // }
    // get the id from query  in the url
    let id = req.query.id;
    // find the contact in the database using id and delete
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log("error occurs deleteing data to database");
            return;
        }
        return res.redirect('/');
    })
    // return res.redirect('/');
});

app.get('/practice',function(req,res){
   return res.render('practice',{
   title:"play traing"
});
});
app.listen(port, function(err){
    if(err) {console.log('error in running the server',err);}
    console.log('Yup! my Express server is running on the port:',port);
});