const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const path = require('path');


//load the environment variable file
require('dotenv').config({path:"./config/keys.env"});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//This allows express to make my static content available from the public
// app.use(express.static('public'))
app.use("/public", express.static(path.join(__dirname,"public")));

//This tells Express to set or register Handlebars as its' Template/View Engine
app.engine('hbs', exphbs({
//   layoutsDir:`${__dirname}/views/layouts`,
//   partialsDir:`${__dirname}/views/partials`,
  // defaultLayout:'main',
  extname: 'hbs'
}));

//set the view engine to use handlebars
// app.set('views',__dirname + '/views');
app.set('view engine', 'hbs');

//load controllers
const generalController = require("./controllers/general");
const roomController = require("./controllers/room");
const userController = require("./controllers/user");
const adminController = require("./controllers/admin");


//map each controller to the app object
app.use("/",generalController);
app.use("/rooms",roomController);
app.use("/user",userController);
app.use("/admin",adminController);

// const sliders = [{
//     sliderImg: settings.sliderPath+`slider01.jpg`
//   }
// ];

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log(`Connected to MongoDB Database`);
})

.catch(err=>console.log(`Error occured when connecting to database ${err}`));


//Setup server
app.listen(PORT,()=>{
    console.log(`Web server is up and running on port ${PORT}!`)
})

// handle 404 responses
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})