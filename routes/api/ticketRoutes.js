var express = require('express');
var router = express.Router();

var tickets_controller = require('../controllers/tickets_controller');
var isAuthenticated = require('../config/middleware/isAuthenticated');

router.get('/', isAuthenticated, tickets_controller.index);

router.post('/new', isAuthenticated, tickets_controller.createTicket);

module.exports = router;