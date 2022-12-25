// need mongoose
const mongoose = require('mongoose');

// create schema
const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
});

// for data collection and store in database
// ('Contact')used to store the data this name in database
const Contact = mongoose.model('Contact',contactSchema);
module.exports = Contact;