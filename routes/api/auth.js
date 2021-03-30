const express = require('express')
const router = express.Router()

router.get('/',(res,req)=>{
    req.send("this is from auth api")
})

module.exports = router;