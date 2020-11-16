const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    productName:{
        type:String,
        required:true,
        trim:true
    },
    productDesc:{
        type:String,
        required:false,
        trim:true
    },
    price:{
        type:String,
        required:true,
        trim:true
    },
    imgRoute:{
        type:String,
        required:true
    },
    store:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('product', productSchema);