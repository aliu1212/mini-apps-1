const express = require('express')
const router = express.Router();
const {getAllUsers, createUser, deleteUser} = require('./controller')

router.route('/')
.get(getAllUsers)
.post(createUser)
.delete(deleteUser);

module.exports = router;