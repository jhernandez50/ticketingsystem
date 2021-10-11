const express = require('express');
const router = express.Router();
const {ticketCont,adminCont}=require('../controllers')
const {withAuth}=require('../utils/auth');

router.get('/',[withAuth],(req,res)=>{
    res.render('index');
});
router.get('/signup',(req,res)=>{
    res.render('register');
})
router.get('/login',(req,res)=>{
    res.render('login');
})
router.get('/create-ticket',[withAuth],(req,res)=>{
    res.render('create-ticket');
})
router.get('/my-tickets',[withAuth],[ticketCont.getTickets])

router.get('/add-service',[withAuth],(req,res)=>{
    res.render('add-service');
})
router.get('/dashboard',[withAuth],(req,res)=>{
    res.render('dashboard');
})
router.get('/services',[withAuth],[adminCont.getServices])
router.get('/customers',[withAuth],[adminCont.getCustomers])
router.get('/IT-members',[withAuth],[adminCont.getMembers])
router.get('/manage-tickets',[withAuth],[adminCont.getTickets])
router.get('/service-detail/:ticketId',[withAuth],[adminCont.getServiceDetail])
router.get('/assigned-tickets',[withAuth],[ticketCont.getAssignedTickets])

module.exports = router;