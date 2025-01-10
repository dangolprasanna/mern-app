// backend/routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser, resetPassword, getAllUsers } = require('../controllers/user.controller');
const router = express.Router();

// Route for user registration
router.post('/register', registerUser);

// Route for user login
router.post('/login', loginUser);

// Route for password reset
router.post('/reset-password', resetPassword);

router.get('/allUsers', getAllUsers);

module.exports = router;
