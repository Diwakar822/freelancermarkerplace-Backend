const mongoose = require('mongoose')

const contractSchema = new mongoose.Schema({
    otherParty:{type:String, require:true},
    projectTitle:{type: String , require:true},
    status:{type: String, enum: ['pending', 'completed', 'Active']},
    milestonesCompleted:{type:Number , require:true}
})

module.exports = mongoose.model('Contract', contractSchema);