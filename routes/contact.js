let express = require('express');
let router = express.Router();
//let mongoose = require('mongoose');

//creatte a reference to the db schema
let contactController = require('../controllers/contact');
//Get Contact 
router.get('/', contactController.displayContactList);
//Get Route for the Add page
//this will display add page
router.get('/add', contactController.displayAddList);

//Post Route for the Add page
router.post('/add', contactController.processAddPage);

//Get Edit Page
router.get('/edit/:id', contactController.displayEditPage);

/* POST request - Update the database with data from the Edit Page */
router.post('/edit/:id', contactController.processEditPage);

//Get Delete Page
router.get('/delete/:id', contactController.performDelete);

module.exports = router;
