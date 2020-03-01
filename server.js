const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const PORT = process.env.PORT;
const bodyParser = require('body-parser');

//load the environment variable file
require('dotenv').config({path:"./config/keys.env"});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//This allows express to make my static content available from the public
app.use(express.static('public'))

//This tells Express to set or register Handlebars as its' Template/View Engine
app.engine('hbs', exphbs({
  layoutsDir:`${__dirname}/views/layouts`,
  partialsDir:`${__dirname}/views/partials`,
  // defaultLayout:'main',
  extname: 'hbs'
}));

//set the view engine to use handlebars
// app.set('views',__dirname + '/views');
app.set('view engine', 'hbs');

//load controllers
const generalController = require("./controllers/general");
const roomController = require("./controllers/room");

//map each controller to the app object
app.use("/",generalController);
app.use("/rooms",roomController);

// const sliders = [{
//     sliderImg: settings.sliderPath+`slider01.jpg`
//   }
// ];


//Setup server
app.listen(PORT,()=>{
    console.log(`Web server is up and running on port ${PORT}!`)
})

// handle 404 responses
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})