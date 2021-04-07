const express = require('express')
const router = express.Router()
const User = require('../../models/User')
const auth = require('../../midleware/auth')
const Profile = require("../../models/profile")

router.get('/me',auth, async (req,res)=>{
    
    try{
        const profile =  await Profile.findOne({user:req.user.id})

        if(!profile){
            return res.status(400).json({msg:"Profile not found for this user"})
        }
        res.json(profile)
    }catch(err){
        console.log(err.message)
        res.status(500).json({msg:"Server error"})
    }
    
})

module.exports = router;