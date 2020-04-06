const express = require ('express')
const router = express.Router();
//load rooms
const productModel = require("../models/rooms");
const userModel = require("../models/user")


//Admin login route
router.get(`/`,(req,res)=>{
  res.render(`general/adminLogin`,{
    title: "Login",
    headingInfo : "ADMIN Login"

  });
})


//Admin Personal Info route
router.get(`/dashboard`,(req,res)=>{

  res.render(`general/adminDashboard`,{
    title:"Personal Info",
    headingInfo:"ADMIN PERSONAL INFO"
  });
})


//room route
router.get(`/room/add`,(req,res)=>{

  res.render(`rooms/addRoom`,{
    title:"Add Room",
    headingInfo:"ADD ROOM"
  });
})


//Edit room route
router.get(`/room/edit`,(req,res)=>{

  res.render(`rooms/editRoom`,{
    title:"Edit Room",
    headingInfo:"EDIT ROOM"
  });
})


module.exports = router;