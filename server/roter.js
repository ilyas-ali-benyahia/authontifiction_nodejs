// urls.js
const express = require('express');
const { registerUser, loginUser } = require('./controler');

const router = express.Router();

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

module.exports = router;