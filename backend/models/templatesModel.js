const mongoose = require('mongoose');

const templateSchema= new mongoose.Schema({
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
    }
})

module.exports = mongoose.model('templates',templateSchema),