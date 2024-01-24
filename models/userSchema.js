const mongoose=require("mongoose")
// Create a UserSchema.js file in the models folder to define the mongoose schema 
const userSchema=new mongoose.Schema({
username:String,
age:Number,
email:{type:String,require:true},
password:{type:String,require:true}

})
const User=mongoose.model('User',userSchema)
//  export the model
module.exports=User