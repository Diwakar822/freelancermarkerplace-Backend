const Contract = require('../models/Contract')

// create a contract 

const createContract = async(req,  res)=>{
try {
    const {otherParty, projectTitle, status, milestonesCompleted} = req.body

    const newcontract = new Contract({
        otherParty,
        projectTitle,
        status,
        milestonesCompleted
    })

    await newcontract.save();

    res.status(200).json({message:"Contract creted successfully"})

} catch (error) {
    res.status(500).json({message: error.message})
}
  

}

const getContract= async(req, res)=>{

    try {
        const contract = await Contract.find();

        res.status(200).json(contract)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports={createContract, getContract}
