// controllers/users.js
const express = require("express")
const router = express.Router()
const User = require('../models/User')
const List = require('../models/List')

//Add a new list and attached it to the user
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
            updatedUser.items.push(newList._id)
            updatedUser.save()
                console.log('user', updatedUser) 
        })    
    }
    updateUser()
})
