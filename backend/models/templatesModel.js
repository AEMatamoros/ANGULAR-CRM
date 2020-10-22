const mongoose = require('mongoose');

const templateSchema= new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    descripcion:{
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
    }
})

module.exports = mongoose.model('templates',templateSchema),