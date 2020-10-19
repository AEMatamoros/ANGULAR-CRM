const mongoose= requier('mongoose');

const categorySchema = new mongoose.Schema({
    category:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports = mongoose.model('category', categorySchema);