let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//creatte a reference to the db schema
let contact = require('../models/contact');

//Get Contact 
router.get('/', (req, res, next) => {
    contact.find((err, contactList) => {
        if(err){
            return console.error(err);
        }
        else {
            console.log(contactList);
            /* 
            res.render('contacts/index, '){
            title: 'Contact List', 
            contactList: contactList
            }
            */
        }
    });
});

module.exports = router;
//structure to work with new root