const Payment = require('../models/Payment');

// Create Payment
const createPayment = async (req, res) => {
  const { job, freelancer, amount,client,name,email } = req.body;

  try {
    const newpayment = new Payment({
      name,
      email,
      job,
      client,
      freelancer,
      amount,
    });
    await newpayment.save();

    res.status(201).json("payment created successfully");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Payment History
const  getPaymentHistory = async (req, res) => {
  try {
    const {id}=req.params
    const payments = await Payment.find({ id }).populate('job freelancer', 'title name email');
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createPayment,  getPaymentHistory };
