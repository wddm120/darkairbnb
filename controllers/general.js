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