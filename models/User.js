const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema({
  user_id: String,
  pwd: String,
  status: String,
  first_name: String,
  last_name: String,
  email_address: String,
  photo_url: String,
  items: [
      {
          ref:"Item",
          type: mongoose.SchemaTypes.ObjectId
      }
  ],
  lists: [
      { 
          ref:"List",
          type: mongoose.Schema.Types.ObjectId
      }
   ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;