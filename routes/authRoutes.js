const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

// Routes for authentication
router.post('/register', registerUser); // User registration
router.post('/login', loginUser);       // User login

module.exports = router;