const mongoose= require('mongoose');

const storePagesSchema = new mongoose.Schema({
    pageName:{
        type:String,
        required:true,
        trim:true
    },
    pageType:{
        type:String,
        required:true,
        trim:true
    },
    store:{
        type:mongoose.SchemaTypes.Mixed,
        required:true
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
});

module.exports = mongoose.model('storePages',storePagesSchema);