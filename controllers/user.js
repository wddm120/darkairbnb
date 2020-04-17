const express = require ('express')
const router = express.Router();
//load rooms
// const productModel = require("../models/roomFake");
const roomModel = require("../models/room");
const userModel = require("../models/user");
const bcrypt = require("bcryptjs");
const moment = require('moment');
const path = require("path");
const isUserAuthenticated = require("../middleware/userAuth");




// User Signup route
router.get(`/signup`,(req,res)=>{
  res.render(`general/signup`,{
      title: "Sign-Up"
  });
});


router.post(`/signup`,(req, res) => {
  // console.log(req.body);
  const errors = [];
  const {email,phoneNumber,firstName,lastName} = req.body;

  //object
  const newUser = {
    email : req.body.email,
    phoneNumber : req.body.phoneNumber,
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    password: req.body.password

  }

  /*Rules for inserting into a MongoDB database using mongoose is to do the following :
  1. you have to create an instance of the module, you must pass data that you want insertedin the form of an object(object literal)
  2. From the instance, you call the save method
  */

  // TWILIO
  const accountSid = (process.env.TWILIO_API_KEY);
  const authToken = (process.env.TWILIO_AUTH_TOKEN);
  const client = require('twilio')(accountSid, authToken);

  // SEND_GRID
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
  
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
  } 
  else if (req.body.password.length < 8) {
    errors.push("use at least 8 characters");
  } 

  if (errors.length > 0) {
    res.render(`general/signup`, {
      messages: errors
    });
  } 
  // if(userModel.findOne({email})){
  //   errors.push("email is already exist");


  // }
  else{
    // console.log(req.body);
    // console.log(accountSid);
    // console.log(authToken);


  //   userModel.findOne({ email: req.body.email }, function(err, user) {
  //     if(err) {
  //        //handle error here
  //     }
   
  //     //if a user was found, that means the user's email matches the entered email
  //     if (user) {
  //           var err = new Error('A user with that email has already registered. Please use a different email..')
  //          err.status = 400;
  //          return next(err);
  //     } else {
  //         //code if no user with entered email was found
  //     }
  //  }); 



    //instance
    const user = new userModel(newUser);

    user.save()

      .then(() => {
        // res.redirect("/")
        res.render("general/index", {
          replyMsg: "We sent an email to " + `${email}` + " and SMS to " + `${phoneNumber}` + " . To continue, please check your email and verify your account.",
          // rooms: productModel.getAllRooms()
        });
      })
      .catch(err => console.log(`Error happened when inserting in the database : ${err}`));


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
      <p>As an extra security measure, please verify this is the correct email address for your Dark Airbnb account, which is linked to the phone number ${phoneNumber}.</p>
      <p>Click <a href="#">this link</a> to verify your email address</p>
      <p><button type="reset" name="reset" value="reset">This isn't my account</button></p>
      </form>
      <p><img src="img/DarkAirbnbLogo.png" alt=""></a></p>
      `,
    };


    // SENDGRID
    sgMail.send(clientMsg)
      //Asynchornous operation (who don't know how long this will take to execute)
      // .then(() => {
      //   res.redirect("/");
      // })
      .then(() => {

        // res.render("general/index", {
        //   replyMsg: "We sent an email to " +`${email}`+ " and SMS to " + `${phoneNumber}` + " . To continue, please check your email and verify your account.",
        //   rooms: productModel.getAllRooms()
        // });
      })
      .catch(err => {
        console.log(`Error ${err}`);
      });


    // TWILIO
    client.messages
      .create({
        body: `Hi ${firstName} ${lastName}, Thank you for joining Dark Airbnb. Please check your email and verify your account`,
        from: '+14805088297',
        to: `${phoneNumber}`
      })
      .then(message => {
        console.log(message.sid);

      })
      .catch((err) => {
        console.log(`Error ${err}`);
      })
  }
});


// User Login route
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
   
    userModel.findOne({email:req.body.email})
     .then(user=>{
         
         const messages=[];
         //email not found
         if(user==null)
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
            bcrypt.compare(req.body.password, user.password)
            .then(isMatched=>{
                if (isMatched)
                {
                    //create our session
                    req.session.userInfo = user;
                    res.redirect(`/user/profile`);
                }
                else
                {
                  messages.push("The username or password you entered is incorrect");
                    res.render("general/login",{
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


//User Personal Info route
router.get(`/profile`,isUserAuthenticated,(req,res)=>{

  res.render('general/userDashboard',{
    title:"Personal Info",
    headingInfo:"USER PERSONAL INFO"
  });
})


//User Edit route
router.get(`/edit`,isUserAuthenticated, (req, res) => {

  res.render(`general/editUser`, {
    title: "Edit",
    headingInfo: "USER EDIT"
  });

})

router.put("/update/:id",(req,res)=>{
  const messages=[];
  const user = {
    // profilePic:req.body.profilePic,
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    gender : req.body.gender,
    dateOfBirth : req.body.dateOfBirth,
    email : req.body.email,
    phoneNumber : req.body.phoneNumber,
    governmentId : req.body.governmentId,
    address : req.body.address

  }

//  //instance
//  const user1 = new userModel(user);
 
//     req.files.profilePic.name = `pro_pic${user1._id}${path.parse(req.files.profilePic.name).ext}`
//     req.files.profilePic.mv(`public/img/users/${req.files.profilePic.name}`)
//     .then(()=>{
//       userModel.updateOne({_id:user._id},user)
        
   
//       .then(()=>{
//         req.session.userInfo = user;
//         res.redirect(`/user/profile`)

//     })
  
  userModel.updateOne({_id:req.params.id},user )
  .then(()=>{

     req.session.userInfo = user;
     res.redirect(`/user/profile`)


 
  })

   .catch(err=>console.log(`Error happened when updating data from the database : ${err}`));



});


router.get("/logout/",(req,res)=>{

  req.session.destroy();
  res.redirect("/")

  // res.render("User/userDashboard");
})

module.exports = router;