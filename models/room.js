const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//this indicates the shapes of the documents that will be entering the database
const roomSchema = new Schema({
  roomPic:
  {
    type:String
  },
  title:
  {
    type:String,
    required:true
  },
  description:
  {
    type:String,
    required:true
  },
  price:
  {
    type:String,
    required:true
  },
  address:
  {
    type:String
  },
  status:
  {
    type:String,
    default:"Open"
  },
  dateCreated:
  {
    type:Date,
    default:Date.now()
  }

});





// for every schema you create (create a schema per collection) you must also create a model object. The model will allow you to perform CRUD operations on a given collection! 
const roomModel = mongoose.model('User', roomSchema);

module.exports = roomModel;