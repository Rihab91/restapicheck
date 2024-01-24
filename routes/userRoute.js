const express=require("express")
const router=express.Router()
const User=require("../models/userSchema")
const {CreateUser,GetUser,UpdateUser,DeleteUser}=require("../controllers/userController")
// // Routes for methods(post,get,put,delete)
router.post('/createUser',CreateUser)
router.get('/getallUser',GetUser)
router.put('/updateUser/:a',UpdateUser)
router.delete('/deleteUser/:a',DeleteUser)


module.exports=router