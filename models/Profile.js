const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  name:{type:String , required: true},
  email:{type:String, required: true},
  bio: { type: String },
  skills: [String],
  portfolio: [String], // URLs or file links
});

module.exports = mongoose.model('Profile', profileSchema,);
