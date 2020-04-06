const express = require ('express')
const router = express.Router();
//load rooms
const productModel = require("../models/rooms");
// const {email,phoneNumber,firstName,lastName,message} = req.body;
const userModel = require("../models/user")


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


// // User Signup route
// router.get(`/signup`,(req,res)=>{
//   res.render(`general/signup`,{
//       title: "Sign-Up"
//   });
// });

// // app.get('/signup', function(request, response){
// //   return response.render('signup');
// // });

// router.post(`/signup`,(req, res) => {
//   // console.log(req.body);
//   const errors = [];
//   const {email,phoneNumber,firstName,lastName} = req.body;

//   //object
//   const newUser = {
//     email : req.body.email,
//     phoneNumber : req.body.phoneNumber,
//     firstName : req.body.firstName,
//     lastName : req.body.lastName,
//     password: req.body.password
//   }

//   /*Rules for inserting into a MongoDB database using mongoose is to do the following :
//   1. you have to create an instance of the module, you must pass data that you want insertedin the form of an object(object literal)
//   2. From the instance, you call the save method

//   */

//   //instance
//   const user = new userModel(newUser);
 

//   user.save()
//   .then(()=>{
//     // res.redirect("/")
//     res.render("general/index", {
//       replyMsg: "We sent an email to " +`${email}`+ " and SMS to " + `${phoneNumber}` + " . To continue, please check your email and verify your account.",
//       rooms: productModel.getAllRooms()
//     });


//   })

//   .catch(err=>console.log(`Error happened when inserting in the database : ${err}`));




 


//   // // TWILIO
//   // const accountSid = (process.env.TWILIO_API_KEY);
//   // const authToken = (process.env.TWILIO_AUTH_TOKEN);
//   // const client = require('twilio')(accountSid, authToken);

//   // // SEND_GRID
//   // const sgMail = require('@sendgrid/mail');
//   // sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
  
//   // if (req.body.email == "") {
//   //   errors.push("Email is required");  
//   // }
//   // if (req.body.phoneNumber == "") {
//   //   errors.push("Phone number is required"); 
//   // }
//   // if (req.body.firstName == "") {
//   //   errors.push("First name is required");
//   // }
//   // if (req.body.password == "") {
//   //   errors.push("Password is required");
//   // } else if (req.body.password.length < 8) {
//   //   errors.push("use at least 8 characters");
//   // } 

//   // if (errors.length > 0) {
//   //   res.render(`general/signup`, {
//   //     messages: errors
//   //   });
//   // } else {
//   //   // console.log(req.body);
//   //   // console.log(accountSid);
//   //   // console.log(authToken);

//   //   const clientMsg = {
//   //     to: `${email}`,
//   //     from: `n01398965@humbermail.ca`,
//   //     subject: 'Confirm your email',
//   //     // text: 'and easy to do anywhere, even with Node.js',ß
//   //     html:
//   //       `
//   //     <h2>Thank You!</h2>
//   //     <p>Your submission has been received</p>
//   //     <form>
//   //     <p>Hi ${firstName},</p>
//   //     <p>As an extra security measure, please verify this is the correct email address for your Dark Airbnb account, which is linked to the phone number ${phoneNumber}.</p>
//   //     <p>Click <a href="#">this link</a> to verify your email address</p>
//   //     <p><button type="reset" name="reset" value="reset">This isn't my account</button></p>
//   //     </form>
//   //     <p><img src="img/DarkAirbnbLogo.png" alt=""></a></p>
   
//   //     `,
//   //   };


//   //   // SENDGRID
//   //   sgMail.send(clientMsg)
//   //     //Asynchornous operation (who don't know how long this will take to execute)
//   //     // .then(() => {
//   //     //   res.redirect("/");
//   //     // })
//   //     .then(() => {
        
//   //       // res.render("general/index", {
//   //       //   replyMsg: "We sent an email to " +`${email}`+ " and SMS to " + `${phoneNumber}` + " . To continue, please check your email and verify your account.",
//   //       //   rooms: productModel.getAllRooms()
//   //       // });
//   //     })
//   //     .catch(err => {
//   //       console.log(`Error ${err}`);
//   //     });

    
//   //     // TWILIO
//   //     client.messages
//   //       .create({
//   //         body: `Hi ${firstName} ${lastName}, Thank you for joining Dark Airbnb. Please check your email and verify your account`,
//   //         from: '+14805088297',
//   //         to: `${phoneNumber}`
//   //       })
//   //       .then(message => {
//   //         console.log(message.sid);
    
//   //       })
//   //       .catch((err) => {
//   //         console.log(`Error ${err}`);
//   //       })
//   // }
// });


// // User Login route
// router.get(`/login`,(req,res)=>{
//   res.render(`general/login`,{
//       title: "Login",
//       headingInfo : "Login to Dark Airbnb"

//   });
// });

// router.post(`/login`,(req,res)=>{
//   const errors= [];

//   if(req.body.email=="")
//   {
//     errors.push("Email is required");
//   }
//   if(req.body.password=="")
//   {
//     errors.push("Password is required");
//   }

//   if(errors.length > 0)
//   {
//     res.render(`general/login`,{
//       messages : errors
//     });
//   }else{
//     // errors.push("Okay");
//     res.redirect(`/personal-info`);
//   }

// });





// //Admin login route
// router.get(`/admin`,(req,res)=>{
//   res.render(`general/adminLogin`,{
//     title: "Login",
//     headingInfo : "ADMIN Login"

//   });
// })




//Contact us route
router.get(`/contact-us`,(req,res)=>{
    res.render(`general/contactus`,{
        title: "Contact Us",
        headingInfo : "CONTACT US",
    });

});

//process 
router.post(`/contact-us`,(req,res)=>{
  const errors = [];
  const { fullName, email, message } = req.body;
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

  if (req.body.fullName == "") {
    errors.push("Full name is required");
  }
  if (req.body.email == "") {
    errors.push("Email is required");
  }
  if (req.body.message == "") {
    errors.push("Message is required");
  }
  if (errors.length > 0) {
    res.render(`general/contactus`, {
      messages: errors
    });
  } else {
    // console.log(req.body);
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: `n01398965@humbermail.ca`,
      from: `${email}`,
      subject: 'Contact Us Form Submit',
      // text: 'and easy to do anywhere, even with Node.js',ß
      html:
        `
      <p>Visitor's Full Name : ${fullName}</p>
      <p>Visitor's Email Address : ${email}</p>
      <p>Visitor's Message : ${message}</p>
      `,
    };
    sgMail.send(msg)
      //Asynchornous operation (who don't know how long this will take to execute)
      // .then(() => {
      //   res.redirect("/");
      // })
      .then(() => {
        res.render("general/index", {
          replyMsg: "Thank you for contacting us. We will respond to you as soon as possible.",
          rooms: productModel.getAllRooms()
        });
      })
      .catch(err => {
        console.log(`Error ${err}`);
      });
  }

});

module.exports = router;