const mongoose = require('../db/connection');

const ItemSchema = new mongoose.Schema({
  item: String,
  item_type: String,
  item_desc: String,
  status: String,
  image_url: String, 
  item_qty: String
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;