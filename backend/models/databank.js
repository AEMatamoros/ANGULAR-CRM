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
    },
    parent:{
        type:String,
        default:"",
    },
    name:{
        type:String,
        default:"Unknown"
    }
})

module.exports = mongoose.model('dataBank', dataBankSchema);