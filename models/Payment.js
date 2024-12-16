const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  name:{type:String, required:true},
  email:{type:String, required:true, unique: true },
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: false },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  freelancer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Payment', paymentSchema);
