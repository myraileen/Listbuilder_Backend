const mongoose = require('../db/connection');

const ListSchema = new mongoose.Schema({
  title: String,
  list_type: String,
  status: String,
  image_url: String,
  items: [
    {
        ref:"Item",
        type: mongoose.SchemaTypes.ObjectId
    }
]
});

const List = mongoose.model('List', ListSchema);

module.exports = List;