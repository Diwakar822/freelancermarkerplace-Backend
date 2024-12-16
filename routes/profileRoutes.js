const express = require('express');
const { createProfile, getProfile, updateProfile, getAllprofile } = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Profile-related routes
router.post('/', createProfile);    // Create a profile
router.get('/:id', getProfile);     // Get a profile by user ID
router.put('/:id', updateProfile); // Update a profile
router.get('/',getAllprofile)


module.exports = router;
