const mongoose= require('mongoose');

const dataBankSchema = new mongoose.Schema({
    type:{
        type:String,
        required:true,
        trim:true
    },
    route:{
        type:String,
        required:true,
        trim:true
    },
    store:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('dataBank', dataBankSchema);