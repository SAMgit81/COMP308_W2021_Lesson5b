let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About' });
}

module.exports.displayProductsPage = (req, res, next) => {
    res.render('index', { title: 'Products' });
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services' });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact' });
}

module.exports.displayLoginPage = (req, res, next) => {
    // TODO
}

module.exports.processLoginPage = (req, res, next) => {
    // TODO
}

module.exports.displayeRegiesterPage = (req, res, next) => {
    // TODO
}

module.exports.processRegiesterPage = (req, res, next) => {
    // TODO
}

module.exports.performLogout = (req, res, next) => {
    // TODO
}

