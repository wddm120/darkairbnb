const express = require ('express')
const router = express.Router();
//load rooms
// const productModel = require("../models/roomFake");
const roomModel = require("../models/room");

// show all rooms
// router.get(`/`,(req,res)=>{
//   res.render(`rooms/showRooms`,{
//       title : "Room Listing",
//       // data : allRooms
//       // rooms : productModel.getAllRooms()

//   });
// });


////Route to fetch all rooms
router.get("/list",(req,res)=>
{

    //pull from the database, get the results that was returned and then inject that results into the taskDashboard
    //return an array. Use the find when you want to pull multiple values from the database
    //sort room by date created
    roomModel.find().sort({dateCreated:-1})
 
    .then((rooms)=>{ 
        //filter out the information that you want from array of documnets that was returned into a new array

        //array 3 documents meaning that the array has 3 elements
        
        const filteredRoom = rooms.map(room=>{
            
            return{
                id:room._id,
                roomPic:room.roomPic,
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


//Info room route
router.get(`/info/:id`,(req,res)=>{
  roomModel.findById(req.params.id)
  .then((room)=>{
      
      const {_id, roomPic, title, description, price, address, city, province, country,status, checkIn, checkOut} = room;
      
      res.render("rooms/infoRoom",{
          
          _id,
          roomPic,
          title,
          description,
          price,
          address,
          city,
          province,
          country,
          status,
          checkIn,
          checkOut
      });
      //console.log(moment(dueDate).format('YYYY-MM-DD'))

  })

  .catch(err=>console.log(`Error happened when pulling from the database : ${err}`));

})


router.post(`/find`,(req, res) => {
  
    //incase sensitive find room feature, filtered by city & created date
    roomModel.find({city:{ $regex: req.body.location, $options: 'i' }}).sort({dateCreated:-1})

   
      .then((rooms)=>{ 
          //filter out the information that you want from array of documnets that was returned into a new array
  
          //array 3 documents meaning that the array has 3 elements
          
          const filteredRoom = rooms.map(room=>{
              
              return{
                  id:room._id,
                  roomPic:room.roomPic,
                  title:room.title,
                  description:room.description,   
                  // date:moment(task.dueDate).format('YYYY-MM-DD'),
                  price:room.price,
                  city:room.city
    
              }
              
          });
  
          res.render("general/index",{
              data:filteredRoom
  
          });  
  
      })
  
      .catch(err=>console.log(`Error happened when pulling from the database : ${err}`));

  });



  


module.exports = router;