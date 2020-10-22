const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    owner:{
        type:mongoose.SchemaTypes.Mixed,//Json
        required:true
    },
    companyName:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:false,
        trim:true
    }
});

module.exports = mongoose.model('company',companySchema);