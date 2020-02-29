const express = require ('express')
const router = express.Router();
//load rooms
const productModel = require("../models/rooms");

// Home route
router.get('/', (req, res) => {
  res.render('general/index', {
    title: "Home",
    // indexRooms : promoRooms
    rooms: productModel.getAllRooms()
    // carousel : sliders
  });
});

// app.get('/login',(req,res)=>{
//   res.render('login',{
//       title: "Login"

//   });
// });


// Signup route
router.get(`/signup`,(req,res)=>{
  res.render(`general/signup`,{
      title: "Sign-Up"
  });
});

// app.get('/signup', function(request, response){
//   return response.render('signup');
// });

router.post(`/signup`,(req, res) => {
  // console.log(req.body);
  const errors = [];
  // const userReg = [];
  
  // let userReg = {
  //   uEmail: req.body.email,
  //   uPhoneNumer :req.body.phoneNumber
  // }

  
  if (req.body.email == "") {
    errors.push("Email is required");  
  }
  // if (req.body.phoneNumber == "") {
  //   errors.push("Phone number is required"); 
  // }
  // if (req.body.firstName == "") {
  //   errors.push("First name is required");
  // }
  // if (req.body.password == "") {
  //   errors.push("Password is required");
  // } else if (req.body.password.length < 8) {
  //   errors.push("use at least 8 characters");
  // } 
  // else {
  //   userReg.push(`${req.body.email}`);
  //   userReg.push(`${req.body.phoneNumber}`);
  //   userReg.push(`${req.body.firstName}`);

  // }

  if (errors.length > 0) {
    res.render(`general/signup`, {
      messages: errors
    });
  } else {
    res.render(`general/index`, {
      title: "Home",
      userReg : req.body,
      // userRegInfo:productModel.getUsers(),
      // verivyContent : "We sent an sent email to " + userReg.push(`${req.body.firstName}`) +". To continue, please check your email and verify your account. Didn't receive email?",

      rooms: productModel.getAllRooms()
     
    });
    
    // {
    //   const accountSid = 'PUT YOUR ACCOUNT SID HERE';
    //   const authToken = 'PUT HERE YOUR AUTHTOKEN HERE';
    //   const client = require('twilio')(accountSid, authToken);

    //   client.messages
    //     .create({
    //       body: `${req.body.firstName} ${req.body.lastName} Message :${req.body.message}`,
    //       from: '+14805088297',
    //       to: `${req.body.phoneNumber}`
    //     })
    //     .then(message => {
    //       console.log(message.sid);
    //       res.render("index");
    //     })
    //     .catch((err) => {
    //       console.log(`Error ${err}`);
    //     })
    // }
  }
});


// Login route
router.get(`/login`,(req,res)=>{
  res.render(`general/login`,{
      title: "Login"

  });
});

router.post(`/login`,(req,res)=>{
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
    res.render(`general/login`,{
      messages : errors
    });
  }else{
    errors.push("Okay");
  }

});


//Contact us route
router.get(`/contact-us`,(req,res)=>{
    res.render(`general/contactus`,{
        title: "Contact Us",
        headingInfo : "Contact Us Page",
    });

});

//process 
router.post(`/contact-us`,(req,res)=>{
  res.render(`general/contactus`);
});

module.exports = router;