const mongoose = require('mongoose');
 let host="localhost"
 let port = "27017"
 let db = "ownshopFront"

module.exports = () => {
  mongoose.connect(`mongodb://${host}:${port}/${db}`, { useNewUrlParser: true })
    .then(() => console.log(`DB COnected`))
    .catch(err => console.log(`DB COnection Error`))

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log(`Mongo is disconnected`);
      process.exit(0)
    });
  });
}