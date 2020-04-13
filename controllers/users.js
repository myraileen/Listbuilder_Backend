// controllers/users.js
const express = require("express")
const router = express.Router()
const User = require('../models/User')

// GET ALL USERS
router.get('/', (req, res) => {
    User.find().then(users => res.json(users))
  })	

// GET USER BY ID	
router.get('/:id', (req, res) => {
    User.findById(req.params.id).then(user => res.json(user))
  })

// CREATE A USER
router.post('/', (req, res) => {
    User.create(req.body).then(newUser => res.json(newUser))
  })

// UPDATE A USER	
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(updatedUser => res.json(updatedUser))
  })

// DELETE A USER
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id).then(deletedUser => res.json(deletedUser))
  })

module.exports = router