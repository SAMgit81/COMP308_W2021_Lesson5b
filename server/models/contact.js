let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    age: Number
},
{
    collection: "first"
});

module.exports = mongoose.model('contact', contactSchema);