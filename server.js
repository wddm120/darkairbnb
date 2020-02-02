const express = require("express");
const exphbs  = require('express-handlebars');
const app = express();
const port = 3000;

const settings = {
    notifyQuantitiesRemaining: 5,
    // productsPerPage: 3,
    imagePath: 'img/rooms/'
  }

//This allows express to make my static content available from the public
app.use(express.static('public'))


//This tells Express to set or register Handlebars as its' Template/View Engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//set up routes
app.get("/",(req,res)=>{
    res.render("index",{
        title: "Home",
        headingInfo : "Home Page",
      
        randomContent: "BLAH BLAH BLHA"
    })
});

// app.get("/room-listing",(req,res)=>{
//   res.render("roomlisting",{
//       title: "Room Listing",
//       headingInfo : "Room Listing Page",
//   });

// });

app.get("/user-registration",(req,res)=>{
  res.render("userregistration",{
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

app.get("/room-listing",(req,res)=>{


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
          image : `img/rooms/img01.jpg`,
          title: `Champ Super 1`,
          description: `champion`,
          price: 39
        },{ //1
          id : 102,
          image : `img/rooms/img02.jpg`,
          title: `Nike Super 1`,
          description: `nike`,
          price: 59
        },{ //2
          id : 103,
          image : `img/rooms/img03.jpg`,
          title: `Adidas Super 1`,
          description: `adidas`,
          price: 69
        },{ //3
          id : 104,
          image : `img/rooms/img04.jpg`,
          title: `Fila Super 1`,
          description: `fila`,
          price: 49
        },{ //4
          id : 105,
          image : `img/rooms/img05.jpg`,
          title: `Puma Super 1`,
          description: `puma`,
          price: 49
        },{ //5
          id : 106,
          image : `img/rooms/img06.jpg`,
          title: `Champ Super 2`,
          description: `champion`,
          price: 139
        }
    ]

    res.render("roomlisting",{
        title: "Room Listing",
        headingInfo : "Room Listing",
        products : allRooms

    });
});




app.listen(port,()=>{

    console.log(`Web server is up and running on port ${port}!`)
})

// handle 404 responses
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })