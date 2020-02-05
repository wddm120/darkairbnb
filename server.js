const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const port = 3000;

const settings = {
    imagePath: `img/rooms/`,
    starsPath: `img/stars/`
  }



//This allows express to make my static content available from the public
app.use(express.static('public'))

//This tells Express to set or register Handlebars as its' Template/View Engine
app.engine('hbs', exphbs({
  layoutsDir:`${__dirname}/views/layouts`,
  partialsDir:`${__dirname}/views/partials`,
  // defaultLayout:'main',
  extname: 'hbs'

}));

// hbs.registerPartials(__dirname + '/views/partials');

//set the view engine to use handlebars
app.set('view engine', 'hbs');
// app.set('views',__dirname + '/views');


//set up routes
app.get('/',(req,res)=>{
    res.render('index',{
        title: "Home",
        headingInfo : "Home Page"
        
        // randomContent: "BLAH BLAH BLHA"
    });
    
});


app.get('/user-registration',(req,res)=>{
  res.render('userregistration',{
      title: "User Registration",
      headingInfo : "User Registration Page",
  });
});

app.get('/login',(req,res)=>{
  res.render('login',{
      title: "Login"
      // headingInfo : "User Registration Page",
  });
});

// app.get("/contact-us",(req,res)=>{

//     res.render("contactus",{
//         title: "Contact Us",
//         headingInfo : "Contact Us Page",

//     });


// });

app.get('/room-listing',(req,res)=>{


    // const fakeDB= [];

    // fakeDB.push({title:'XPS 13',description:`Our smallest 13-inch laptops feature a virtually 
    // borderless InfinityEdge display and up to 10th gen Intel® processors. 
    // Touch, silver, rose gold and frost options available
    // `,price:`1349.99`});

    // fakeDB.push({title:'XPS 15',description:`Powerhouse performance with the latest processors and NVIDIA 
    // graphics paired with a stunning 4K Ultra HD display.`,price:`1749.99`});

    // fakeDB.push({title:'XPS 17',description:`XPS 17 is designed to keep you entertained for more than 9 hours 
    // with a 9-cell battery upgrade.`,price:`1949.99`});

    const allRooms =[
      { //0
        id : 101,
        roomImg : settings.imagePath+`img01.jpg`,
        starImg: settings.starsPath+`2stars.png`,
        title: `Hidden Gem of ...`,
        description: `Entire home, Self check-in, Sparkling clean, Victoria And Christian is a Superhost`,
        price: 66
      },{ //1
        id : 102,
        roomImg : settings.imagePath+`img02.jpg`,
        starImg: settings.starsPath+`3stars.png`,
        title: `Joshua Tree ...`,
        description: `Entire home, Self check-in, Sparkling clean, Victoria And Christian is a Superhost`,
        price: 159
      },{ //2
        id : 103,
        roomImg : settings.imagePath+`img03.jpg`,
        starImg: settings.starsPath+`4stars.png`,
        title: `1 Bdrm Modern ...`,
        description: `Entire home, Self check-in, Sparkling clean, Victoria And Christian is a Superhost`,
        price: 99 
      },{ //3
        id : 104,
        roomImg : settings.imagePath+`img04.jpg`,
        starImg: settings.starsPath+`1star.png`,
        title: `Entire Chalet. South Lake ...`,
        description: `The Lake Tahoe Chalet`,
        price: 249
      },{ //4
        id : 105,
        roomImg : settings.imagePath+`img05.jpg`,
        starImg: settings.starsPath+`0star.png`,
        title: `Entire house ...`,
        description: `The Lake Tahoe Chalet`,
        price: 149 
      },{ //5
        id : 106,
        roomImg : settings.imagePath+`img06.jpg`,
        starImg: settings.starsPath+`5stars.png`,
        title: `Unique Architecture ...`,
        description: `Entire home, Sparkling clean, Laskarina is a Superhost, 	
        Great location`,
        price: 572
      }
    ];

    res.render('roomlisting',{
        title: "Room Listing",
        // headingInfo : "Room Listing",
        rooms : allRooms

    });
});


app.listen(port,()=>{

    console.log(`Web server is up and running on port ${port}!`)
})

// handle 404 responses
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })