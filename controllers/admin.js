const express = require ('express')
const router = express.Router();
//load rooms
const productModel = require("../models/rooms");
const adminModel = require("../models/admin")




//Admin login route
router.get(`/`,(req,res)=>{
  res.render(`general/adminLogin`,{
    title: "Login",
    headingInfo : "ADMIN Login"

  });
})


router.post(`/login`,(req, res) => {
  // console.log(req.body);
  const errors = [];
  const {email,phoneNumber,firstName,lastName} = req.body;

  //object
  const newAdmin = {
    email : req.body.email,
    phoneNumber : req.body.phoneNumber,
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    password: req.body.password

  }
  res.redirect("/admin/dashboard")
});

//Admin signup route
router.get(`/signup`,(req,res)=>{
  res.render(`general/adminSignup`,{
    title: "SignUp",
    headingInfo : "ADMIN SignUp"

  });
})


router.post(`/signup`,(req, res) => {
  // console.log(req.body);
  const errors = [];
  const {email,phoneNumber,firstName,lastName} = req.body;

  //object
  const newAdmin = {
    email : req.body.email,
    phoneNumber : req.body.phoneNumber,
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    password: req.body.password

  }
  res.redirect("/admin/dashboard")
});

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


router.get("/logout/",(req,res)=>{

  req.session.destroy();
  res.redirect("/admin")

  // res.render("User/userDashboard");
})

module.exports = router;