// server.js
const express=require("express")
const app =express()
const mongoose=require('mongoose')
const dotenv=require("dotenv")
dotenv.config({path:'./config/.env'})
const port=process.env.PORT 
app.use(express.json())

// Connect to MongoDB : mongoose
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('DB connected'))
.catch((err)=> {console.log(err)})


app.use('/api',require('./routes/userRoute'))
// Start the server 
app.listen(port,(err)=>{
    err ? console.log(err) : console.log('server running in port:',port)
})

