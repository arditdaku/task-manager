const mongoose = require('mongoose');

mongoose
  .connect(`${process.env.MONGO_URI}`, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to mongo db');
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = {
  mongoose,
};
