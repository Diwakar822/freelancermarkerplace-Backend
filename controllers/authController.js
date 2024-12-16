const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config

// register 

const registerUser = async (req , res)=>{
try {
    const {email,password,role, name} = req.body
       const users = await User.findOne({email:email})

       if (users) {
          return  res.status(400).json({message:"user already exites"})
       }
        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

       const newusers = new User({
        email,
        password: hashedPassword,
        role,
        name,
       })
       await newusers.save();
      return res.status(200).json({message:"register successfully"})
} catch (error) {
    return res.status(500).json({message:error.message})
}
}

// loginuser

const loginUser = async (req , res)=>{
 
    try {
        const { email, password } = req.body;

          // check if the user exists
          const user = await User.findOne({ email: email });

          if (!user) {
            return res.status(400).json({ message: 'User does not exist' });
        }

             // check if the password is correct
             const passwordIsValid = await bcrypt.compare(password, user.password);

                // if the password is incorrect, return an error message
            if (!passwordIsValid) {
                return res.status(400).json({ message: 'Invalid password' });
            }

             // generate a token
             const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET,);

               // store the token in the cookie
            res.cookie('token', token, { httpOnly: true });

            return res.status(200).json({ message: 'Login successful' });

    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}


module.exports={registerUser, loginUser}