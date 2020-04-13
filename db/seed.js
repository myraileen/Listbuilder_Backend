const mongoose = require('./connection')
const User = require('../models/User')

User.deleteMany({})
User.collection.insertMany([
    { "user_id": "myrafah", 
      "status": "1", 
      "first_name": "Myra",
      "last_name": "Fah",	
      "email_address": "myra@hotmail.com",
      "photo_url": "." },
    { "user_id": "karriedvorak", 
      "status": "1", 
      "first_name": "Karrie",
      "last_name": "Dvorak",	
      "email_address": "karrie@email.com",
      "photo_url": "." }
])
.then(users => console.log(users))
.catch(err => console.log(err))	
