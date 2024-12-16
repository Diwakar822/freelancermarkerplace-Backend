const Job = require('../models/Job');

// Create Job
const createJob = async (req, res) => {
  
  try {
    const { title, description, budget } = req.body;

    const newjob = new Job({
      title,
      description,
      budget,
      
    });
    await newjob.save();
    res.status(201).json({message:"job created successfully"});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({}).populate('client', 'name email');
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//getJobById

const getJobById = async(req,res)=>{
  try {
    const {id} = req.params;
    const jobs = await Job.findById(id)

    if (!jobs) {
      req.status(500).json({ message:'Job not found'})
    }
    res.status(200).json(jobs)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};

//update Job

const updateJob = async (req,res)=>{
  try {
    const {id} = req.params;
    const {title} = req.body
    const job = await Job.findById(id)

    job.title=title;
     await job.save();
    
    res.status(200).json({message:"updated succesfully"})
  } catch (error) {
    res.status(500).json({message:'Not response'})
  }

};
//deleteJob

const deleteJob =async(req,res) => {
try {
  const{id}= req.params
  await Job.findByIdAndDelete(id);
  res.status(200).json({message:'deleted successfully'})
} catch (error) {
  res.status(500).json({message:'not yet'})
}
}

module.exports = { createJob, getJobs, getJobById, updateJob, deleteJob };
