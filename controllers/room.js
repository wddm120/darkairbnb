const express = require ('express')
const router = express.Router();
//load rooms
// const productModel = require("../models/roomFake");
const roomModel = require("../models/room");

// show all rooms
router.get(`/`,(req,res)=>{
  res.render(`rooms/showRooms`,{
      title : "Room Listing",
      // rooms : allRooms
      // rooms : productModel.getAllRooms()

  });
});



////Route to fetch all rooms
router.get("/list",(req,res)=>
{

    //pull from the database, get the results that was returned and then inject that results into the taskDashboard
    //return an array. Use the find when you want to pull multiple values from the database
    roomModel.find()
 
    .then((rooms)=>{ 
        //filter out the information that you want from array of documnets that was returned into a new array

        //array 3 documents meaning that the array has 3 elements
        
        const filteredRoom = rooms.map(room=>{
            
            return{
                id:room._id,
                title:room.title,
                description:room.description,   
                // date:moment(task.dueDate).format('YYYY-MM-DD'),
                price:room.price,
                address:room.address,
                city:room.city,
                province:room.province,
                country:room.country,
                status:room.status

            }
            
        });

        res.render("rooms/list",{
            data:filteredRoom

        });

    })

    .catch(err=>console.log(`Error happened when pulling from the database : ${err}`));
    
});


//Add room route
router.get(`/add`,(req,res)=>{

  res.render(`rooms/addRoom`,{
    title:"Add Room",
    headingInfo:"ADD ROOM"
  });
})


router.post(`/add`,(req, res) => {
  // console.log(req.body);
  const errors = [];
  const {title,description,price,address,city,province,country,status} = req.body;

  //object
  const newRoom = {
    title : req.body.title,
    description : req.body.description,
    price : req.body.price,
    address : req.body.address,
    city : req.body.city,
    province : req.body.province,
    country : req.body.country,
    status: req.body.status

  }

  /*Rules for inserting into a MongoDB database using mongoose is to do the following :
  1. you have to create an instance of the module, you must pass data that you want insertedin the form of an object(object literal)
  2. From the instance, you call the save method

  */



  if (req.body.title == "") {
    errors.push("Title is required");  
  }
  // if (req.body.description == "") {
  //   errors.push("Description is required"); 
  // }
  // if (req.body.price == "") {
  //   errors.push("Price is required");
  // }
  // if (req.body.address == "") {
  //   errors.push("Address is required");
  // } 
  // if (req.body.city == "") {
  //   errors.push("City is required");
  // }
  // if (req.body.province == "") {
  //   errors.push("Province is required");
  // }
  // if (req.body.country == "") {
  //   errors.push("Country is required");
  // }


  if (errors.length > 0) {
    res.render(`rooms/addRoom`, {
      messages: errors
    });
  } else {
    // console.log(req.body);
    // console.log(accountSid);
    // console.log(authToken);

    //instance
    const room = new roomModel(newRoom);
    
    room.save()
    
    .then(()=>{
      // res.redirect("/")
      res.render("rooms/addRoom", {
        replyMsg: "Room added"
        // rooms: productModel.getAllRooms()
      });
    })
    .catch(err=>console.log(`Error happened when inserting in the database : ${err}`));

  }
});


//Edit room route
router.get(`/edit`,(req,res)=>{

  res.render(`rooms/editRoom`,{
    title:"Edit Room",
    headingInfo:"EDIT ROOM"
  });
})

router.put("/update/:id",(req,res)=>{
  const messages=[];
  const room = {
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    gender : req.body.gender,
    dateOfBirth : req.body.dateOfBirth,
    email : req.body.email,
    phoneNumber : req.body.phoneNumber,
    governmentId : req.body.governmentId,
    address : req.body.address

  }
  
  userModel.updateOne({_id:req.params.id},room )
  .then(()=>{

     req.session.userInfo = room;
     res.redirect(`/edit`)


 
  })

   .catch(err=>console.log(`Error happened when updating data from the database : ${err}`));



});

// //show add room form
// router.get(`/add`,(req,res)=>{
// res.render();
// });

// // when user submits form
// router.post(`/add`,(req,res)=>{
// res.render();
// });

module.exports = router;