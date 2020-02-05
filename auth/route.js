const express = require('express');
const router = express.Router();
const controller = require('./controller');


router.post('/Home', controller.Home); 

router.post('/Signup', controller.Signup);

module.exports = router;
