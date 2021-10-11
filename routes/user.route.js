const express = require('express');
const router = express.Router();
const {userCont}=require('../controllers')


router.post('/signup',[userCont.register]);
router.post('/signin',[userCont.login]);
router.get('/logout',[userCont.logout])


module.exports = router;