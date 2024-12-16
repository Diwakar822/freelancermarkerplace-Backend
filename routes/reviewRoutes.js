const express = require('express');
const { createReview, getReviews } = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Review-related routes
router.post('/', createReview);       // Add a review
router.get('/', getReviews);         // Get reviews for a user

module.exports = router;
