const express = require('express');
const parser = require('body-parser')
const app = express();
const controller = require('./controllers/controls');
const cors = require('cors')

//Middleware
app.use(cors());
app.use(express.json());
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

//Controllers
app.use('/', controller);
// app.use('/api/lists', listsController);

app.listen(8080, () => {
  console.log('They see me rollin...on port 8080...');
});