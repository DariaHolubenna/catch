const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => {
    console.log('db connected');
  }
  )
};