const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const port = 3000;

const settings = {
    imagePath: `img/rooms/`,
    starsPath: `img/stars/`
  }

const allRooms =[
  { //0
    id : 101,
    roomImg : settings.imagePath+`img01.jpg`,
    starImg: settings.starsPath+`2stars.png`,
    title: `Champ Super 1`,
    description: `champion`,
    price: 39
  },{ //1
    id : 102,
    roomImg : settings.imagePath+`img02.jpg`,
    starImg: settings.starsPath+`3stars.png`,
    title: `Nike Super 1`,
    description: `nike`,
    price: 59
  },{ //2
    id : 103,
    roomImg : settings.imagePath+`img03.jpg`,
    starImg: settings.starsPath+`4stars.png`,
    title: `Entire apartment ...`,
    description: `Designer Loft Bangkok Silom`,
    price: 102 
  },{ //3
    id : 104,
    roomImg : settings.imagePath+`img04.jpg`,
    starImg: settings.starsPath+`1star.png`,
    title: `Entire Chalet. South Lake ...`,
    description: `The Lake Tahoe Chalet`,
    price: 49
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
    title: `Champ Super 2`,
    description: `champion`,
    price: 139
  }
];

//This allows express to make my static content available from the public
app.use(express.static('public'))

//This tells Express to set or register Handlebars as its' Template/View Engine
app.engine('hbs', exphbs({
  layoutsDir:`${__dirname}/views/layouts`,
  extname: 'hbs',
  defaultLayout:'main',
  partialsDir:`${__dirname}/views/partials`
}));

app.set('view engine', 'hbs');

//set up routes
app.get('/',(req,res)=>{
    res.render('index',{
        title: "Home",
        headingInfo : "Home Page",
        rooms: allRooms,
        randomContent: "BLAH BLAH BLHA"
    });
    
});


app.get('/user-registration',(req,res)=>{
  res.render('userregistration',{
      title: "User Registration",
      headingInfo : "User Registration Page",
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

    // const allRooms =[
    //     { //0
    //       id : 101,
    //       roomImg : settings.imagePath+`img01.jpg`,
    //       starImg: settings.starsPath+`2stars.png`,
    //       title: `Champ Super 1`,
    //       description: `champion`,
    //       price: 39
    //     },{ //1
    //       id : 102,
    //       roomImg : settings.imagePath+`img02.jpg`,
    //       starImg: settings.starsPath+`3stars.png`,
    //       title: `Nike Super 1`,
    //       description: `nike`,
    //       price: 59
    //     },{ //2
    //       id : 103,
    //       roomImg : settings.imagePath+`img03.jpg`,
    //       starImg: settings.starsPath+`4stars.png`,
    //       title: `Adidas Super 1`,
    //       description: `adidas`,
    //       price: 69
    //     },{ //3
    //       id : 104,
    //       roomImg : settings.imagePath+`img04.jpg`,
    //       starImg: settings.starsPath+`1star.png`,
    //       title: `Fila Super 1`,
    //       description: `fila`,
    //       price: 49
    //     },{ //4
    //       id : 105,
    //       roomImg : settings.imagePath+`img05.jpg`,
    //       starImg: settings.starsPath+`0star.png`,
    //       title: `Puma Super 1`,
    //       description: `puma`,
    //       price: 49
    //     },{ //5
    //       id : 106,
    //       roomImg : settings.imagePath+`img06.jpg`,
    //       starImg: settings.starsPath+`5stars.png`,
    //       title: `Champ Super 2`,
    //       description: `champion`,
    //       price: 139
    //     }
    // ]

    res.render('roomlisting',{
        title: "Room Listing",
        // headingInfo : "Room Listing",
        // rooms : allRooms

    });
});


app.listen(port,()=>{

    console.log(`Web server is up and running on port ${port}!`)
})

// handle 404 responses
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })