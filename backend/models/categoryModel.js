const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:false,
        trim:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    store:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('category', categorySchema);