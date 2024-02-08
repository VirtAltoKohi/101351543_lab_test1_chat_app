const express = require('express');
const groupMessageController = require('../controllers/groupMessagesController.js');
const router = express.Router();

router.post('/sendGroupMessage', groupMessageController.sendMessage);

module.exports = router;