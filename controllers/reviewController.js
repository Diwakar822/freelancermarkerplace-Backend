const Review = require('../models/Review');

// Create Review
const createReview = async (req, res) => {
  const { freelancerName, rating, comment } = req.body;

  try {
    const review = new Review({
      freelancerName,
      rating,
      comment,
    });
   
     await review.save()

    res.status(201).json({message:"your review successfully added"});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all Reviews by database
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createReview, getReviews };
