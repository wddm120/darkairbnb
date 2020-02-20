const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const productModel = require("./models/rooms");

const settings = {
    imagePath: `img/rooms/`,
    starsPath: `img/stars/`
    // sliderPath: `img/sliders/`
  }



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
app.get('/',(req,res)=>{

  const promoRooms =[
    { //0
      id : 101,
      roomImg : settings.imagePath+`img20.png`,
      starImg: settings.starsPath+`2stars.png`,
      title: `Walnut TREEHOUSE`,
      description: `You’ll have the treehouse to yourself`,
      price: 66
    },{ //1
      id : 102,
      roomImg : settings.imagePath+`img21.png`,
      starImg: settings.starsPath+`3stars.png`,
      title: `Treehouse + Cabin Retreat`,
      description: `The Treehouse Retreat + Cabin Retreat ...`,
      price: 159
    },{ //2
      id : 103,
      roomImg : settings.imagePath+`img22.png`,
      starImg: settings.starsPath+`4stars.png`,
      title: `River Eye - Treehouse`,
      description: `Experience being in the trees, looking ...`,
      price: 99 
    },{ //3
      id : 104,
      roomImg : settings.imagePath+`img23.png`,
      starImg: settings.starsPath+`1star.png`,
      title: `THE MAJESTIC TREEHOUSE romantic, luxury retreat ...`,
      price: 249
    },{ //4
      id : 105,
      roomImg : settings.imagePath+`img24.png`,
      starImg: settings.starsPath+`0star.png`,
      title: `Forest Camping Hut`,
      description: `Enjoy a private redwood forest camping hut ...`,
      price: 149 
    },{ //5
      id : 106,
      roomImg : settings.imagePath+`img25.png`,
      starImg: settings.starsPath+`5stars.png`,
      title: `The ReTreet House`,
      description: `Be a part of nature and stay at a house among the trees ...`,
      price: 572
    }
  ];

    res.render('index',{
        title: "Home",
        indexRooms : promoRooms
        // carousel : sliders
    });
    
});

// app.get('/login',(req,res)=>{
//   res.render('login',{
//       title: "Login"

//   });
// });

app.get('/signup',(req,res)=>{
  res.render('signup',{
      title: "Sign-In"
  });
});

app.post('/signup',(req,res)=>{
  const errors= [];

  if(req.body.email=="")
  {
    errors.push("Email is required");
  }
  if(req.body.phoneNumber=="")
  {
    errors.push("Phone number is required");
  }
  if(req.body.fistName=="")
  {
    errors.push("First name is required");
  }
  if(req.body.password=="")
  {
    errors.push("Password is required");
    
  }else if(req.body.password.length<8)
  {
    errors.push("use at least 8 characters");
  }else{
    errors.push("Okay");
  }
  
  if(errors.length > 0)
  {
    res.render('signup',{
      messages : errors
    });
  }else{
    // errors.push("Okay");
    {
      const accountSid = 'PUT YOUR ACCOUNT SID HERE';
      const authToken = 'PUT HERE YOUR AUTHTOKEN HERE';
      const client = require('twilio')(accountSid, authToken);
      
      client.messages
        .create({
           body: `${req.body.firstName} ${req.body.lastName} Message :${req.body.message}`,
           from: 'PUT YOUR TRIAL NUMBER HERE',
           to: `${req.body.phoneNumber}`
         })
        .then(message => {
          console.log(message.sid);
          res.render("index");
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        })
  
    }
  }

});


app.get('/login',(req,res)=>{
  res.render('login',{
      title: "Login"

  });
});

app.post('/login',(req,res)=>{
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
    res.render('login',{
      messages : errors
    });
  }else{
    errors.push("Okay");
  }

});

// app.get("/contact-us",(req,res)=>{

//     res.render("contactus",{
//         title: "Contact Us",
//         headingInfo : "Contact Us Page",

//     });


// });


app.get('/rooms',(req,res)=>{


    // const allRooms =[
    //   { //0
    //     id : 110,
    //     roomImg : settings.imagePath+`img01.jpg`,
    //     starImg: settings.starsPath+`2stars.png`,
    //     title: `Hidden Gem of ...`,
    //     description: `Entire home, Self check-in, Sparkling clean, Victoria And Christian is a Superhost`,
    //     price: 66
    //   },{ //1
    //     id : 111,
    //     roomImg : settings.imagePath+`img02.jpg`,
    //     starImg: settings.starsPath+`3stars.png`,
    //     title: `Joshua Tree ...`,
    //     description: `Entire home, Self check-in, Sparkling clean, Victoria And Christian is a Superhost`,
    //     price: 159
    //   },{ //2
    //     id : 112,
    //     roomImg : settings.imagePath+`img03.jpg`,
    //     starImg: settings.starsPath+`4stars.png`,
    //     title: `1 Bdrm Modern ...`,
    //     description: `Entire home, Self check-in, Sparkling clean, Victoria And Christian is a Superhost`,
    //     price: 99 
    //   },{ //3
    //     id : 113,
    //     roomImg : settings.imagePath+`img04.jpg`,
    //     starImg: settings.starsPath+`1star.png`,
    //     title: `Entire Chalet. South Lake ...`,
    //     description: `The Lake Tahoe Chalet`,
    //     price: 249
    //   },{ //4
    //     id : 114,
    //     roomImg : settings.imagePath+`img05.jpg`,
    //     starImg: settings.starsPath+`0star.png`,
    //     title: `Entire house ...`,
    //     description: `The Lake Tahoe Chalet`,
    //     price: 149 
    //   },{ //5
    //     id : 115,
    //     roomImg : settings.imagePath+`img06.jpg`,
    //     starImg: settings.starsPath+`5stars.png`,
    //     title: `Hector Cave House`,
    //     description: `Hector Cave House, carved into the unique caldera cliff for more than 250 years, was originally used as a wine cellar.`,
    //     price: 572
    //   }
    // ];

    res.render('roomlisting',{
        title : "Room Listing Page",
        // rooms : allRooms
        rooms : productModel.getAllRooms()

    });
});


// app.get("/products",(req,res)=>{

    


//   res.render("product",{
//       title:"Room Listing Page",
//       products : productModel.getallProducts()
//   });

// });

// app.post("/products",(req,res)=>{

//   //When the form is submitted
// })



app.listen(port,()=>{

    console.log(`Web server is up and running on port ${port}!`)
})

// handle 404 responses
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})