const express = require('express');
const router = express.Router();
const {ticketCont,adminCont}=require('../controllers')


router.post('/add',[ticketCont.createTicket]);
router.post('/assign',[adminCont.assignTicket])
module.exports = router;