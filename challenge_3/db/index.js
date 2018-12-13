const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users3', {
  useNewUrlParser: true
})

const connector = mongoose.connection;

connector.on('err', () => {console.log('error connecting to db: ', err)});
connector.once('open', () => {console.log('connected to mongodb yo')})

module.exports = mongoose;