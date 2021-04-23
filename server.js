const express = require('express')
const connectDB = require('./config/db')
const app = express()
const path = require('path')


connectDB()
app.use(express.json({extended:false}));
app.use('/api/user',require('./routes/api/user'))
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/posts',require('./routes/api/posts'))
app.use('/api/profile',require('./routes/api/profile'))

//serve static assets to production
if(process.env.NODE_ENV='production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve('client','build','index.html'))
    })
}




const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))
