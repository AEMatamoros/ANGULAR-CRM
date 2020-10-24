const mongoose = require('mongoose');

const templateSchema= new mongoose.Schema({
    templateName:{
        type:String,
        required:true,
        trim:true
    },
    templateDescription:{
        type:String,
        required:true,
        trim:true
    },
    img_route:{
        type:String,
        required:true,
        trim:true
    },
    html:{
        type:String,
        required:false,
        trim:true
    },
    css:{
        type:String,
        required:false,
        trim:true
    },
    js:{
        type:String,
        required:false,
        trim:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('templates',templateSchema)