const express = require ('express')
const router = express.Router();
const userModel = require("../models/user")
//load rooms
const roomModel = require("../models/room");


// Home route
router.get('/',async (req, res) => {

  //All featured rooms are showing on homepage, pulled from db and filtered by date created
  roomModel.find({featured:'true'}).sort({dateCreated:-1})
  // roomModel.findOne({featured:req.body.location})
 
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
                price:room.price
  
            }
            
        });

        res.render("general/index",{
            data:filteredRoom

        });  

    })

    .catch(err=>console.log(`Error happened when pulling from the database : ${err}`));
  

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
          // rooms: productModel.getAllRooms()
        });
      })
      .catch(err => {
        console.log(`Error ${err}`);
      });
  }

});

module.exports = router;