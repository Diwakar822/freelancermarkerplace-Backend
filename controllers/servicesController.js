
const Service = require('../models/services')

const createservices =async (req,res)=>{
    try {

        const {title,description,price, category}=req.body;

         const newsevices = new Service({
            title,
            description,
            price,
            category
         })

         await newsevices.save();
         res.status(200).json({message:"services created successfully"})
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}

const getAllservices= async (req,res)=>{

    try {
        const getservice = await Service.find()

        res.json(getservice)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports={createservices,getAllservices}