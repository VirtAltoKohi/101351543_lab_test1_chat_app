const express = require('express');
const privateMessageController = require('../controllers/privateMessagesControlller.js');
const router = express.Router();

router.post('/sendPrivateMessage', privateMessageController.sendMessage);

module.exports = router;