// controllers/users.js
const express = require("express")
const router = express.Router()
const User = require('../models/User')
const List = require('../models/List')
const Item = require('../models/Item')

// GET ALL USERS
router.get('/users', (req, res) => {
    User.find({})
    .populate('items')
    .populate('lists')
    .then(users => res.json(users))
  })	

// GET USER BY ID	
router.get('/users/:id', (req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
  })

// CREATE A USER
router.post('/users/', (req, res) => {
    User.create(req.body)
    .then(newUser => res.json(newUser))
  })

// UPDATE A USER	
router.put('/users/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(updatedUser => res.json(updatedUser))
  })

// DELETE A USER
router.delete('/users/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(deletedUser => res.json(deletedUser))
  })

// Add a new list and attach it to the user
router.put('/new-list',(req, res) => {
  console.log(req)
  console.log('req params', req.params.userId)

  const userID = req.body.user._id
  let newList = {}

      function populateList() {
      List.create(
          req.body.list
      ).then(list => {
          newList = list
          console.log(newList)
          res.json(newList)
      })
  }
  async function updateUser() {
      await populateList()
      User.findOne({_id: userID}).then(updatedUser => {
          updatedUser.lists.push(newList._id)
          updatedUser.save()
              console.log('user', updatedUser) 
      })    
  }
  updateUser()
})

//Delete a list and remove it from the user
router.delete('/delete-list/:userId/:listId',(req, res) => {
  const userID = req.params.listId
  List.findOneAndDelete({_id: req.params.listId}).then(listDelete => {
      res.json(listDelete)
  })

  User.findOne({_id: req.params.userId}).then((userRemoveListRef, i, arr) => {
      var n = eventRemoveListRef.indexOf(userID)
      userRemoveListRef.items.splice(n,1)   
      userRemoveListRef.save() 
      console.log(userRemoveListRef)
  })
})

// Add a new item and attach it to the user UPDATE
router.put('/new-item',(req, res) => {
  console.log(req)
  console.log('req params', req.params.userId)

  const userID = req.body.user._id
  let newItem = {}

      function populateItem() {
      Item.create(
          req.body.item
      ).then(item => {
          newItem = item
          console.log(newItem)
          res.json(newItem)
      })
  }
  async function updateUser() {
      await populateItem()
      User.findOne({_id: userID}).then(updatedUser => {
          updatedUser.items.push(newItem._id)
          updatedUser.save()
              console.log('user', updatedUser) 
      })    
  }
  updateUser()
})

//Delete a item and remove it from the user
router.delete('/delete-item/:userId/:itemId',(req, res) => {
  const userID = req.params.itemId
  List.findOneAndDelete({_id: req.params.itemId}).then(itemDelete => {
      res.json(itemDelete)
  })

  User.findOne({_id: req.params.userId}).then((userRemoveItemRef, i, arr) => {
      var n = eventRemoveItemRef.indexOf(userID)
      userRemoveItemRef.items.splice(n,1)   
      userRemoveItemRef.save() 
      console.log(userRemoveItemRef)
  })
})


module.exports = router