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
    .populate('items')
    .populate('lists')
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

// DELETE A USER BY ID
router.delete('/users/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(deletedUser => res.json(deletedUser))
  })

// GET ALL LISTS
router.get('/lists', (req, res) => {
  List.find({})
  .populate('items')
  .then(lists => res.json(lists))
})	

// GET LIST BY ID	
router.get('/lists/:id', (req, res) => {
  List.findById(req.params.id)
  .then(list => res.json(list))
})

// UPDATE A LIST	
router.put('/lists/:id', (req, res) => {
  List.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedList => res.json(updatedList))
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

//Delete a item and remove it from the user
router.delete('/delete-item/:userId/:itemId',(req, res) => {
  const userItemID = req.params.itemId
  Item.findOneAndDelete({_id: req.params.itemId}).then(itemDelete => {
      res.json(itemDelete)
  })

  User.findOne({_id: req.params.userId}).then((userRemoveItemRef, i, arr) => {
      var n = userRemoveItemRef.indexOf(userItemID)
      userRemoveItemRef.items.splice(n,1)   
      userRemoveItemRef.save() 
      console.log(userRemoveItemRef)
  })
})

//Delete a list and remove it from the user
router.delete('/delete-list/:userId/:listId',(req, res) => {
  const userListID = req.params.listId
  List.findOneAndDelete({_id: req.params.listId}).then(listDelete => {
      res.json(listDelete)
  })

  User.findOne({_id: req.params.userId}).then((userRemoveListRef, i, arr) => {
      var n = userRemoveListRef.indexOf(userListID)
      userRemoveListRef.lists.splice(n,1)   
      userRemoveListRef.save() 
      console.log(userRemoveListRef)
  })
})

// Add a new item and attach it to the user UPDATE
router.put('/new-item',(req, res) => {
  const userID = req.body.user._id
  let newItem = {}
      function populateItem() {
      Item.create(
          req.body.item
      ).then(item => {
          newItem = item
          res.json(newItem)
      })
  }
  async function updateUser() {
      await populateItem()
      User.findOne({_id: userID}).then(updatedUser => {
          updatedUser.items.push(newItem._id)
          updatedUser.save()
      })    
  }
  updateUser()
})

// Add item to a list (UPDATE list's item array)
router.put('/new-list-item',(req, res) => {
  console.log(req)
  console.log('req params', req.params.listId)

  const listId = req.body.user._id
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
  async function updateList() {
      await populateItem()
      User.findOne({_id: listId}).then(updatedList => {
          updatedList.items.push(newItem._id)
          updatedList.save()
              console.log('user', updatedList) 
      })    
  }
  updateList()
})

module.exports = router