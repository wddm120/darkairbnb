const express = require ('express')
const router = express.Router();
const adminModel = require("../models/admin")
// const productModel = require("../models/roomFake");
const roomModel = require("../models/room");
const bcrypt = require("bcryptjs");
const moment = require('moment');
const path = require("path");




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
    phoneNumber : req.body.phoneNumber,
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
 // if (req.body.firstName == "") {
 //   errors.push("First name is required");
 // }
 // if (req.body.password == "") {
 //   errors.push("Password is required");
 // } 
 // else if (req.body.password.length < 8) {
 //   errors.push("use at least 8 characters");
 // } 

 if (errors.length > 0) {
   res.render(`general/signup`, {
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