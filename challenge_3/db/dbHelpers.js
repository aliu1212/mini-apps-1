
const User = require('./models')

module.exports = {
  getAllUsersHelper: (callback) => {
    User.find({}, (err, data) => {
      if(err) {
        console.log('there\'s an error getting all brohan', err);
      } else {
        callback(data);
      }
    })
  },

  createUserHelper: (name, email, password, callback) => {
    new User({name, email, password}).save((err) => {
      if (err) {
        console.log('error creating user dude', err);
      } else {
        callback();
      }
    })
  },

  deleteUserHelper: (id, callback) => {
    User.deleteOne({id}, (err, data) => {
      if (err) {
        console.log('too bad, wans\'t deleted lolz', err);
      } else {
        callback();
      }
    })
  }
}