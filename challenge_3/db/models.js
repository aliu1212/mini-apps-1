const mongoose = require('./index.js');

const userData = mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userData)

module.exports = User;