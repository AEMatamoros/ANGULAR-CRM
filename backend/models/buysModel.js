const mongoose = require('mongoose');

const buysSchema = new mongoose.Schema({
    date:{
        type: Date,
        default:Date.now
    },
    products:{
        type:Array,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('buys',buysSchema);