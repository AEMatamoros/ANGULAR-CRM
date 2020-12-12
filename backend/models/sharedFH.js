const mongoose =  require('mongoose');

const sharedSchema = new mongoose.Schema({
  htmlH: {
    type: String,
  },
  htmlF: {
    type: String,
  },
  cssH: {
    type: String,
  },
  cssF: {
    type: String,
  },
  storeId:{
      type: String
  }
});

module.exports = mongoose.model('shared',sharedSchema);