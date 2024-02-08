const express = require('express');
const userController = require('../controllers/userController.js');
const router = express.Router();

router.post('/login', userController.userLogin);
router.post('/signup', userController.userSignup);

module.exports = router;