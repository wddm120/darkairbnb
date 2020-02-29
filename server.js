const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const productModel = require("./models/rooms");


//This allows express to make my static content available from the public
app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//This tells Express to set or register Handlebars as its' Template/View Engine
app.engine('hbs', exphbs({
  layoutsDir:`${__dirname}/views/layouts`,
  partialsDir:`${__dirname}/views/partials`,
  // defaultLayout:'main',
  extname: 'hbs'

}));

// const sliders = [{
//     sliderImg: settings.sliderPath+`slider01.jpg`
//   }
// ];

//set the view engine to use handlebars
app.set('view engine', 'hbs');
// app.set('views',__dirname + '/views');


//set up routes
// Home route
app.get('/', (req, res) => {
  res.render('index', {
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
app.get(`/signup`,(req,res)=>{
  res.render(`signup`,{
      title: "Sign-In"
  });
});

// app.get('/signup', function(request, response){
//   return response.render('signup');
// });

app.post(`/signup`,(req, res) => {
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
    res.render(`signup`, {
      messages: errors
    });
  } else {
    res.render(`index`, {
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
app.get(`/login`,(req,res)=>{
  res.render(`login`,{
      title: "Login"

  });
});

app.post(`/login`,(req,res)=>{
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
    res.render(`login`,{
      messages : errors
    });
  }else{
    errors.push("Okay");
  }

});


//Contact us route
app.get(`/contact-us`,(req,res)=>{
    res.render("contactus",{
        title: "Contact Us",
        headingInfo : "Contact Us Page",
    });

});

//process 
app.post(`/contact-us`,(req,res)=>{
  res.render(`contactus`);
});


// show all rooms
app.get(`/rooms`,(req,res)=>{
    res.render(`roomlisting`,{
        title : "Room Listing Page",
        // rooms : allRooms
        rooms : productModel.getAllRooms()

    });
});

//show add room form
app.get(`/room/add`,(req,res)=>{
  res.render();
});

// when user submits form
app.post(`/room/add`,(req,res)=>{
  res.render();
});


app.listen(port,()=>{
    console.log(`Web server is up and running on port ${port}!`)
})

// handle 404 responses
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})