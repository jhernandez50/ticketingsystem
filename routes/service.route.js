const express = require('express');
const router = express.Router();
const {serviceCont}=require('../controllers')


router.post('/add',[serviceCont.addService]);

module.exports = router;