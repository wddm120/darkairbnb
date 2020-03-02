const express = require ('express')
const router = express.Router();
//load rooms
const productModel = require("../models/rooms");

// Home route
router.get('/', (req, res) => {
  // console.log(process.env.SENDGRID_API_KEY);
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
  const {email,phoneNumber,firstName} = req.body;
  
  // let userReg = {
  //   uEmail: req.body.email,
  //   uPhoneNumer :req.body.phoneNumber
  // }

  
  if (req.body.email == "") {
    errors.push("Email is required");  
  }
  if (req.body.phoneNumber == "") {
    errors.push("Phone number is required"); 
  }
  if (req.body.firstName == "") {
    errors.push("First name is required");
  }
  if (req.body.password == "") {
    errors.push("Password is required");
  } else if (req.body.password.length < 8) {
    errors.push("use at least 8 characters");
  } 
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
      // title: "Home",
      // userReg : req.body,
      replyMsg : "We sent an sent email to " +`${email}`+ " and SMS to " + `${phoneNumber}` + " . To continue, please check your email and verify your account.",
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
      title: "Login",
      headingInfo : "Login to Dark Airbnb"

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
        headingInfo : "CONTACT US",
    });

});

//process 
router.post(`/contact-us`,(req,res)=>{

  // console.log(process.env.SENDGRID_API_KEY)
  const errors = [];
  const {fullName,email,message} = req.body;
  const sgMail = require('@sendgrid/mail');

    sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

    const msg = {
      to: 'n01398965@humbermail.ca',
      from: 'vahn_x@yahoo.com',
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg)
    .then(()=>{
          res.redirect("/");
      })
      .catch(err=>{
          console.log(`Error ${err}`);
      });


    // const msg = {
    // to: `n01398965@humbermail.ca`,
    // from: `${email}`,
    // subject: 'Contact Us Form Submit',
    // html: 
    // `Vistor's Full Name ${fullName} <br>
    //  Vistor's Email Address ${email} <br>
    //  Vistor's message : ${message}<br>
    // `,
    // };

    // //Asynchornous operation (who don't know how long this will take to execute)
    // sgMail.send(msg)
    // .then(()=>{
    //     res.redirect("/");
    // })
    // .catch(err=>{
    //     console.log(`Error ${err}`);
    // });


  // if (req.body.fullName == "") {
  //   errors.push("Full name is required");  
  // }
  // if (req.body.email == "") {
  //   errors.push("Email is required");  
  // }
  // if (req.body.message == "") {
  //   errors.push("Message is required");  
  // }
  // if (errors.length > 0) {
  //   res.render(`general/contactus`, {
  //     messages: errors
  //   });
  // } else {
  //   // console.log(req.body);
  //   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  //   const msg = {
  //     to: 'n01398965@humbermail.ca',
  //     from: `${email}`,
  //     subject: 'Contact Us Form Submit',
  //     // text: 'and easy to do anywhere, even with Node.js',ß
  //     html: 
  //     `
  //     <p>Visitor's Full Name : ${fullName}</p>
  //     <p>Visitor's Email Address : ${email}</p>
  //     <p>Visitor's Message : ${message}</p>
      
  //     `,
  //   };
    
  //   //Async operation, when you don't know how long it takes to execute
  //   sgMail.send(msg)
  //   .then(()=>{
  //     res.redirect("/", {
  //       // title: "Home",
  //       // userReg: req.body,
  //       replyMsg: "Thank you for contacting us. We will respond to you as soon as possible."
  //       // rooms: productModel.getAllRooms()
  //     });
  //   })
  //   .catch(err=>{
  //     console.log(`Error ${err}`);
  //   })

  //   // res.render(`general/index`, {
  //   //   title: "Home",
  //   //   userReg: req.body,
  //   //   replyMsg: "Thank you for contacting us. We will respond to you as soon as possible.",
  //   //   rooms: productModel.getAllRooms()
  //   // });
  // }
});

module.exports = router;