let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//creatte a reference to the db schema
let contactModel = require('../models/contact');

//Get Contact 
router.get('/', (req, res, next) => {
    contactModel.find((err, contactList) => {
        if (err) {
            return console.error(err);
        }
        else {
            
            
            res.render('contacts/index', {
                title: 'Contact List',
                contactList: contactList
            });
            
        }
    });
});

//Get Route for the Add page
//this will display add page
router.get('/add', (req, res, next) => {
    res.render('contacts/add', {
        title: 'Add new Contact'
    });
});

//Post Route for the Add page
router.post('/add', (req, res, next) => {
    let newContact = contactModel({
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "age": req.body.age
    });


    contactModel.create(newContact, (err, contactModel) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contact-list');
        }
    });
    
});

router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;
    contactModel.findById(id, (err, contactObject) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('contacts/edit', {
                title: 'Edit Contact',
                contact: contactObject
            });
        }
    });
});

// Post Request to update data from edit page

router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;
    let updatedContact = contactModel({
        "_id": id,
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "age": req.body.age
    });

    contactModel.update({ _id: id }, updatedContact, (err) => {
  if (err) {
        console.log(err);
        res.end(err);
    }
    else {
        res.redirect('/contact-list');
    }
    });
});
module.exports = router;
