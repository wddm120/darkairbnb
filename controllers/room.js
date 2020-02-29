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

//show add room form
router.get(`/add`,(req,res)=>{
res.render();
});

// when user submits form
router.post(`/add`,(req,res)=>{
res.render();
});

module.exports = router;