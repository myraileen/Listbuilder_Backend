const express = require('express');
const app = express();
const usersController = require('./controllers/users');
const cors = require('cors')

//Middleware
app.use(express.json());
app.use(cors());

//Controllers
app.use('/api/users', usersController);

app.listen(8080, () => {
  console.log('They see me rollin...on port 8080...');
});