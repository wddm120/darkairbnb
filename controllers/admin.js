const express = require ('express')
const router = express.Router();
const adminModel = require("../models/admin")
// const productModel = require("../models/roomFake");
const roomModel = require("../models/room");
const bcrypt = require("bcryptjs");
const moment = require('moment');
const path = require("path");
const isAdminAuthenticated = require("../middleware/adminAuth");


//Admin login route
router.get(`/`,(req,res)=>{
  res.render(`general/adminLogin`,{
    title: "Login",
    headingInfo : "ADMIN Login"

  });
})

router.post(`/login`,(req, res) => {

  const errors= [];

  if(req.body.email=="")
  {
    errors.push("Email is required");
  }
  if(req.body.password=="")
  {
    errors.push("Password is required");
  }
  if(errors.length > 0)
  {
    res.render(`general/adminLogin`,{
      messages : errors
    });
  }else{
   
    adminModel.findOne({email:req.body.email})
     .then(admin=>{
         
         const messages=[];
         //email not found
         if(admin==null)
         {
          messages.push("The username or password you entered is incorrect");
            res.render("general/login",{
                // data:messages
                messages
            })
            
         }
         //email is found
         else
         {
            // Load hash from your password DB.
            bcrypt.compare(req.body.password, admin.password)
            .then(isMatched=>{
                if (isMatched)
                {
                    //create our session
                    req.session.adminInfo = admin;
                    res.redirect("/admin/dashboard")
                }
                else
                {
                  messages.push("The username or password you entered is incorrect");
                    res.render("general/adminLogin",{
                        // data:messages
                        messages
                    })
                }
            })

            .catch(err=>console.log(`Error : ${err}`));
         }
     })

     .catch(err=>console.log(`Error happened while searching into the data: ${err}`));

  }
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
  const {email,firstName,lastName} = req.body;

  //object
  const newAdmin = {
    email : req.body.email,
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    password: req.body.password

  }

 // SEND_GRID
 const sgMail = require('@sendgrid/mail');
 sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
 
 if (req.body.email == "") {
   errors.push("Email is required");  
 }
 if (req.body.firstName == "") {
   errors.push("First name is required");
 }
 if (req.body.password == "") {
   errors.push("Password is required");
 } 
 else if (req.body.password.length < 8) {
   errors.push("use at least 8 characters");
 } 

 if (errors.length > 0) {
   res.render(`general/adminSignup`, {
     messages: errors
   });
 } else {
   // console.log(req.body);
   // console.log(accountSid);
   // console.log(authToken);

   //instance
   const admin = new adminModel(newAdmin);
   
   admin.save()
   
   .then(()=>{
   

    //  res.redirect("/admin")
     
     res.render("general/adminLogin", {
      replyMsg:`We sent an email to ${email}. To continue, please check your email and verify your account.`
     
     });
   })
   .catch(err=>console.log(`Error happened when inserting in the database : ${err}`));


   const clientMsg = {
     to: `${email}`,
     from: `n01398965@humbermail.ca`,
     subject: 'Confirm your email',
     // text: 'and easy to do anywhere, even with Node.js',ß
     html:
       `
     <h2>Thank You!</h2>
     <p>Your submission has been received</p>
     <form>
     <p>Hi ${firstName},</p>
     <p>As an extra security measure, please verify this is the correct email address for your Dark Airbnb account, which is linked to the phone number.</p>
     <p>Click <a href="#">this link</a> to verify your email address</p>
     <p><button type="reset" name="reset" value="reset">This isn't my account</button></p>
     </form>
     <p><img src="img/DarkAirbnbLogo.png" alt=""></a></p>
     `,
   };


   // SENDGRID
   sgMail.send(clientMsg)
   
     .then(() => {
       
       // res.render("general/index", {
       //   replyMsg: "We sent an email to " +`${email}`+ " and SMS to " + `${phoneNumber}` + " . To continue, please check your email and verify your account.",
       //   rooms: productModel.getAllRooms()
       // });
     })
     .catch(err => {
       console.log(`Error ${err}`);
     });
 }
});

//Admin Personal Info route
router.get(`/dashboard`,isAdminAuthenticated,(req,res)=>{

  res.render(`general/adminDashboard`,{
    title:"Personal Info",
    headingInfo:"ADMIN PERSONAL INFO"
  });
})


//Admin Edit route
router.get(`/edit`,isAdminAuthenticated, (req, res) => {

  res.render(`general/editAdmin`, {
    title: "Edit",
    headingInfo: "ADMIN EDIT"
  });

})

router.put("/update/:id",(req,res)=>{
  const messages=[];
  const admin = {
    // profilePic:req.body.profilePic,
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    email : req.body.email

  }

  
  adminModel.updateOne({_id:req.params.id},admin )
  .then(()=>{
     req.session.adminInfo = admin;
     res.redirect(`/admin/dashboard`)
  })
   .catch(err=>console.log(`Error happened when updating data from the database : ${err}`));

});



//Add room route
router.get(`/room/add`,isAdminAuthenticated,(req,res)=>{
  // res.redirect("/room/add")
  res.render(`rooms/addRoom`,{
    title:"Add Room",
    headingInfo:"ADD ROOM"
  });
})

router.post(`/room/add`,(req, res) => {
  // console.log(req.body);
  const errors = [];
  const {roomPic,title,description,price,address,city,province,country,status,featured} = req.body;

  //object
  const newRoom = {
    roomPic : req.body.roomPic,
    title : req.body.title,
    description : req.body.description,
    price : req.body.price,
    address : req.body.address,
    city : req.body.city,
    province : req.body.province,
    country : req.body.country,
    status: req.body.status,
    featured: req.body.featured

  }

  /*Rules for inserting into a MongoDB database using mongoose is to do the following :
  1. you have to create an instance of the module, you must pass data that you want insertedin the form of an object(object literal)
  2. From the instance, you call the save method

  */
  if (req.body.roomPic == "") {
    errors.push("Room picture is required");  
  }
  if (req.body.title == "") {
    errors.push("Title is required");  
  }
  if (req.body.title == "") {
    errors.push("Title is required");  
  }
  if (req.body.description == "") {
    errors.push("Description is required"); 
  }
  if (req.body.price == "") {
    errors.push("Price is required");
  }
  if (req.body.address == "") {
    errors.push("Address is required");
  } 
  if (req.body.city == "") {
    errors.push("City is required");
  }
  if (req.body.province == "") {
    errors.push("Province is required");
  }
  if (req.body.country == "") {
    errors.push("Country is required");
  }
  if (req.body.status.length == "") {
    errors.push("Status is required");
  }
  if (req.body.featured == "") {
    errors.push("Featured is required");
  }
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

    .then((room)=>{
      req.files.roomPic.name = `roomPic-${room._id}${path.parse(req.files.roomPic.name).ext}`
      req.files.roomPic.mv(`public/img/rooms/${req.files.roomPic.name}`)
      .then(()=>{
          roomModel.updateOne({_id:room._id},{
            roomPic: req.files.roomPic.name
          })
          .then(()=>{
              res.redirect(`/admin/room/info/${room._id}`)
              // res.redirect(`/admin/room/list`)
          })
      })

  })
    
    // .then(()=>{
    //   // res.redirect("/")
    //   res.render("rooms/addRoom", {
    //     replyMsg: "Room added"
    //     // rooms: productModel.getAllRooms()
    //   });
    // })
    .catch(err=>console.log(`Error happened when inserting in the database : ${err}`));

  }
});

//Room info route
router.get("/room/info/:id",isAdminAuthenticated,(req,res)=>{
  roomModel.findById(req.params.id)
  .then((room)=>{
      const {_id, roomPic, title, description, price, address, city, province, country, status, featured} = room;

      res.render("rooms/adminInfoRoom",{
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
        featured
      });
  })
  .catch(err=>console.log(`Error: ${err}`));
})

//Edit room route
router.get(`/room/edit/:id`,isAdminAuthenticated,(req,res)=>{

  // res.render(`rooms/editRoom`,{
  //   title:"Edit Room",
  //   headingInfo:"EDIT ROOM"
  // });

  roomModel.findById(req.params.id)
    .then((room)=>{
        
        const {_id, roomPic, title, description, price, address, city, province, country,status, featured} = room;
        
        res.render("rooms/editRoom",{
            
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
            featured
        });
        //console.log(moment(dueDate).format('YYYY-MM-DD'))

    })

    .catch(err=>console.log(`Error happened when pulling from the database : ${err}`));
})


router.put("/room/update/:id",(req,res)=>{
  const messages=[];
  const room = {
    roomPic:req.body.roomPic,
    title : req.body.title,
    description : req.body.description,
    price : req.body.price,
    address : req.body.address,
    city : req.body.city,
    province : req.body.province,
    country : req.body.country,
    status : req.body.status,
    featured : req.body.featured
  }
  
  roomModel.updateOne({_id:req.params.id},room )
  .then(()=>{

    //  req.session.roomInfo = room;
     res.redirect(`/admin/room/list`)

  })


  // .then((room)=>{
  //   req.files.roomPic.name = `roomPic-${room._id}${path.parse(req.files.roomPic.name).ext}`
  //   req.files.roomPic.mv(`public/img/rooms/${req.files.roomPic.name}`)
  //   .then(()=>{
  //       roomModel.updateOne({_id:room._id},{
  //         roomPic: req.files.roomPic.name
  //       })
  //       .then(()=>{
         
  //           res.redirect(`/admin/room/list`)
  //       })
  //   })

   .catch(err=>console.log(`Error happened when updating data from the database : ${err}`));

});


router.delete("/room/delete/:id",(req,res)=>{
  roomModel.deleteOne({_id:req.params.id})
  .then(()=>{
      res.redirect("/admin/room/list");
  })
  .catch(err=>console.log(`Error happened when deleting data from the database : ${err}`));
});


//List room route
router.get(`/room/list/`,isAdminAuthenticated,(req,res)=>{

      //pull from the database, get the results that was returned and then inject that results into the taskDashboard
      //return an array. Use the find when you want to pull multiple values from the database
      roomModel.find()
   
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
  
          res.render("rooms/adminListRoom",{
              title:"Room listing",
              headingInfo:"ROOM LISTING",
              data:filteredRoom
  
          });
  
      })
  
      .catch(err=>console.log(`Error happened when pulling from the database : ${err}`));
      
  
  // res.render(`rooms/adminListRoom`,{
  //   title:"Room listing",
  //   headingInfo:"ROOM LISTING"
  // });
})


router.get("/logout/",(req,res)=>{
  req.session.destroy();
  res.redirect("/admin")

  // res.render("User/userDashboard");
})

module.exports = router;