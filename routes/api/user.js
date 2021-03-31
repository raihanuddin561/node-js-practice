const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator/check');

router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('email','Please include dvalid imail').isEmail(),
    check('password',"Password should be minimum 6 chars").isLength({min:6})    
],async (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {name,email,password} = req.body
    let user = await User.findone({email})
    if(user){
        return res.status(400).json({errors:[{msg:"User already exist"}]})
    }
    req.send("this is from user api");
});



module.exports = router;