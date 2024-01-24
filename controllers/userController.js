const User=require("../models/userSchema")

//route to add a new user to the database
const CreateUser=async(req,res)=>{

    try {
      const newuser=await User.create(req.body) 
      res.status(201).json({msg:'user created',User:newuser}) 
    } catch (error) {
       res.status(501).json({msg:"something wen wrong",error})
    }
}
//RETURN ALL USERS 
const GetUser=async(req,res)=>{
  try {
   const getuser= await User.find()
   //return a success message in the response
   res.status(200).json({msg:'Get all users',User:getuser})
  }catch (err){
  res.status(500).json({msg:"something wen wrong" , err})
  }}

  // EDIT A USER BY ID 
  const UpdateUser=async(req,res)=>{
    try {
      const updateuser= await User.findByIdAndUpdate({_id:req.params.a},req.body,{new:true})
    res.status(200).json({msg:' user update',User:updateuser})
    }catch (err){
        res.status(500).json({msg:"something wen wrong" , err})
        }}

  //REMOVE A USER BY ID       
    const DeleteUser=async(req,res)=>{
        try {
             const deleteuser= await User.findByIdAndDelete({_id:req.params.a},req.body)
             res.status(200).json({msg:' user deleted',User:deleteuser})
            }catch (err){
            res.status(500).json({msg:"something wen wrong" , err})
            }}    
        



module.exports={CreateUser,GetUser,UpdateUser,DeleteUser}

