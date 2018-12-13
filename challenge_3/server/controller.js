// const express = require('express')
const {getAllUsersHelper, createUserHelper, deleteUserHelper} = require('../db/dbHelpers')

module.exports = {
  getAllUsers: (req, res) => {
    console.log('controller getAll')
    getAllUsersHelper((data) => {
      res.status(200).send(data)
    })
  },
  
  createUser: (req, res) => {
    console.log('controller createUser')
    let {name, email, password} = req.body;
    createUserHelper(name, email, password, () => {
      res.status(200).send('success')
    })
  },

  deleteUser: (req, res) => {
    console.log('controller deleteUser')
    let {id} = req.body
    deleteUserHelper(id, () => {
      res.status(200).send('success')
    })
  }
} 