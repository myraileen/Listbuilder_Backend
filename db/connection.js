// we're importing mongoose from node_modules
const mongoose = require('mongoose')

// set the uri for connecting to our local mongodb
const mongoURI = 'mongodb://localhost/listbuilder'

// connect to the database, with the imported mongoose instance
mongoose
  .connect(mongoURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
  .then(instance => console.log(`Connected to db: ${instance.connections[0].name}`))
  .catch(error => console.log('Connection failed!', error))

// now, our mongoose instance has a configured connection to our local db, in addition
// to its model configuration
module.exports = mongoose