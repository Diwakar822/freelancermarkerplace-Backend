const Profile = require('../models/Profile');

// Create Profile
const createProfile = async (req, res) => {
  const { bio, skills, portfolio, name,email } = req.body;

  try {
    const profile = new Profile({
      name,
      email,
      bio,
      skills,
      portfolio,
    });

    await profile.save();
    res.status(200).json({message:"profile created successfully"});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get all profile from databases

const getAllprofile = async(req, res)=>{

   try{
  const profils = await Profile.find()
   if(!profils){
    res.status(500).json({message:"no more profile create"})
   }
   res.status(200).json(profils)
   }
   catch(err){
      res.status(500).json({message:err.message})
   }
}

// update user profile

const updateProfile = async(req,res)=>{

try {
    const {id} = req.params
    const { email, name,bio,skills,portfolio, } = req.body;

    const profile = await Profile.findByIdAndUpdate(id)

    profile.email=email;
    profile.name=name;
    profile.bio=bio;
    profile.skills=skills;
    profile.portfolio = portfolio;

    await profile.save()
   
    res.status(200).json({message:"profile Updated successfully"});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }


}

// Get Profile by User ID
const getProfile = async (req, res) => {
  try {

    const {id} = req.params

    const profile = await Profile.findById(id).populate('user', 'name email');

      if (!profile) {
        res.status(500).json({message:"profile not found"})
      }
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createProfile, getProfile, updateProfile, getAllprofile };
