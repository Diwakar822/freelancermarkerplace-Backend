const express = require('express');
const { createPayment, getPaymentHistory } = require('../controllers/paymentController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Payment-related routes
router.post('/',createPayment);            // Create a payment
router.get('/history',getPaymentHistory);  // Get payment history

module.exports = router;
