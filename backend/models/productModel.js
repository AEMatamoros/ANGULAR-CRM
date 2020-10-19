const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    productName:{
        type:String,
        required:true,
        trim:true
    },
    productDesc:{
        tyoe:String,
        required:false,
        trim:true
    },
    price:{
        type:String,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:true
    },
    imgRoute:{
        type:String,
        required:true
    },
    store:{
        type:mogoose.SchemaTypes.Mixed,
        required:true
    },
});

module.exports = mongoose.model('product', productSchema);