const mongoose= require('mongoose');

const userBankData = new mongoose.Schema({
    cardNum:{
        type:String,
        required:true,
        trim:true
    },
    csv:{
        type:Number,
        required:true
    },
    owner:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports = mongoose.model('userBankData',userBankData);