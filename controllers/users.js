// controllers/users.js
const express = require("express")
const router = express.Router()
const User = require('../models/User')

// GET ALL USERS
router.get('/', (req, res) => {
  res.send('Users GET route is working!')
})

// GET USER BY ID	
router.get('/:id', (req, res) => {

})

// CREATE A USER
router.post('/', (req, res) => {

})

// UPDATE A USER	
router.put('/:id', (req, res) => {

})

// DELETE A USER
router.delete('/:id', (req, res) => {

})	

module.exports = router