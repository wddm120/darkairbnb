const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const uniqueValidator = require('mongoose-unique-validator');



//this indicates the shapes of the documents that will be entering the database
const userSchema = new Schema({
  profilePic:
  {
    type:String
  },
  firstName:
  {
    type:String,
    required:true
  },
  lastName:
  {
    type:String
  },
  gender:
  {
    type:String,
    default:undefined
  },
  dateOfBirth:
  {
    type:Date,
    default:undefined
  },
  email:
  {
    type:String,
    unique:true,
    required:true
  },
  phoneNumber:
  {
    type:String,
    required:true
  },
  governmentId:
  {
    type:String,
    default:undefined
  },
  address:
  {
    type:String,
    default:undefined
  },
  password:
  {
    type:String
    //required:true
  },
  dateCreated:
  {
    type:Date,
    default:Date.now()
  }

});

//is email exist checker plugin
// userSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });


userSchema.pre("save",function(next){
  //salt random generated characters or strings
  bcrypt.genSalt(12)
  .then((salt)=>{
      bcrypt.hash(this.password,salt)
      .then((encryptPassword)=>{
        this.password = encryptPassword;
        next();
      })
      .catch(err=>console.log(`Error happened while hashing: ${err}`));

  })

  .catch(err=>console.log(`Error occured when salting: ${err}`));


})



// for every schema you create (create a schema per collection) you must also create a model object. The model will allow you to perform CRUD operations on a given collection! 
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;