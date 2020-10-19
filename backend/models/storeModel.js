const mongoose = require('mongoose');

const storesSchema = new mongoose.Schema({
    storeName:{
        type:String,
        required: true,
        trim:true
    },
    storeDescription:{
        type:String,
        trim:true
    },
    dateCreated:{
        type:Date,
        default: Date.now
    },
    company:{
        type:mongoose.SchemaTypes.Mixed,
        required:true
    }
})

module.exports = mongoose.model('stores',storesSchema);