const mongoose= requier('mongoose');

const userTypeSchema = new mongoose.Schema({
    userType:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports = mongoose.model('userType', userTypeSchema);