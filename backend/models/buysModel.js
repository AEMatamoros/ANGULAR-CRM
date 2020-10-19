const mongoose = require('mongoose');

const buysSchema = new mongoose.Schema({
    date:{
        type: Date,
        default:Date.now
    },
    store:{
        type: String,
        required:true,
        trim:true
    },
    products:{
        type:Array,
        required:true
    }
})

module.exports = mongoose.model('buys',buysSchema);