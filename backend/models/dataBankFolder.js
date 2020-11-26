const mongoose= require('mongoose');

const dataBankFolderSchema = new mongoose.Schema({
    store:{
        type:String,
        required:true
    },
    parentFolder:{
        type:String,
        default:"",
    },
    name:{
        type:String,
        default:"None"
    }
})

module.exports = mongoose.model('dataBankFolder', dataBankFolderSchema);