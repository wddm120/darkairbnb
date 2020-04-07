const express = require ('express')
const router = express.Router();
//load rooms
const productModel = require("../models/rooms");

// show all rooms
router.get(`/`,(req,res)=>{
  res.render(`rooms/roomlisting`,{
      title : "Room Listing",
      // rooms : allRooms
      rooms : productModel.getAllRooms()

  });
});

//Add room route
router.get(`/add`,(req,res)=>{

  res.render(`rooms/addRoom`,{
    title:"Add Room",
    headingInfo:"ADD ROOM"
  });
})


//Edit room route
router.get(`/edit`,(req,res)=>{

  res.render(`rooms/editRoom`,{
    title:"Edit Room",
    headingInfo:"EDIT ROOM"
  });
})



// //show add room form
// router.get(`/add`,(req,res)=>{
// res.render();
// });

// // when user submits form
// router.post(`/add`,(req,res)=>{
// res.render();
// });

module.exports = router;