const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  reviewee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  rating: { type: Number, required: true, min: 1, max: 5},
  comment: { type: String, required:true },
  freelancerName:{type: String, require: true},
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Review', reviewSchema);
