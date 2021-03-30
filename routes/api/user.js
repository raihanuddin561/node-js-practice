const express = require('express')
const router = express.Router()

router.get('/',(res,req)=>{
    req.send("this is from user api")
})

module.exports = router;