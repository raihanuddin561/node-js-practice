const express = require('express')
const router = express.Router()
const {check,validationResult} = require('express-validator')
const auth = require('../../midleware/auth')
const Posts = require('../../models/Posts')
const User = require('../../models/User')
router.get('/',auth,async (req,res)=>{
    try{
        const posts = await Posts.find().sort({date:-1})
        res.json(posts)
    }catch(error){

    }
})
router.get('/:id',auth,async (req,res)=>{
    try {
        const posts = await Posts.findById(req.params.id)
        if(!posts){
            res.status(400).json({msg:"posts not found"})
        }
        res.json({posts})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({msg:'server error'})
    }
})
router.post('/',[auth,
    [
        check('text','Texti is required').not().isEmpty()

    ]
],
async (req,res)=>{
   try{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    console.log('finding user info')
    const user = await User.findById(req.user.id).select('-password')
    console.log('printing user info: '+user.name)
    const newPost = new Posts({
        text:req.body.text,
        name:user.name,
        avatar:user.avatar,
        user:req.user.id

    })

    const post = await newPost.save()
    res.json(post)
   }catch(err){
       console.log(err.message)
       res.status(500).json({msg:'server error'})
   }
})
module.exports = router;