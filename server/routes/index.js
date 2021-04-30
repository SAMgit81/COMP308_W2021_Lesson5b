let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET products page. */
router.get('/products', indexController.displayProductsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

/** Get - displays the login Page**/
router.get('/login', indexController.displayLoginPage);

/**Post - process the Login Page**/
router.post('/login', indexController.processLoginPage);

/* Get - displayed the User Registration*/
router.get('.register', indexController.displayeRegiesterPage);
/* Post - process the User Registration Page*/
router.post('register', indexController.processRegiesterPage);
/*GET - perform user logout */
router.get('logout', indexController.performLogout);

module.exports = router;