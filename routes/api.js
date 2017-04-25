
// Dependencies
var express = require('express');
var router = express.Router();

//Product
var MyProduct = require('../models/product');
MyProduct.methods(['get', 'put', 'post', 'delete']);
MyProduct.register(router, '/products');

//Patient
var Patient = require('../models/patient');
Patient.methods(['get', 'put', 'post', 'delete']);
Patient.register(router, '/patients');

/*//Patient
var MyPatient = require('../models/patient');
MyPatient.methods(['get', 'put', 'post', 'delete']);
MyPatient.register(router, '/patients');*/

// Return router
module.exports = router;
