const express = require('express');
const router = express.Router();
const hp = require('../controller/Control.js')


router.get('/', hp.kpp)
router.get('/about', hp.kier)
router.get('/contact', hp.paolo)
router.get('/home', hp.umbao)
router.get('/dashboard', hp.pineda)
module.exports = router;