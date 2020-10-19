const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  },
  user_type: {
    type: String,
    required: true,
    trim: true
},
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  dateCreated:{
    type:Date,
    default:Date.now
  },
  plan:{
    type:String
  }
});

module.exports = mongoose.model('users',userSchema);