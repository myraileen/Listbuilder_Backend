const express = require('express');
const app = express();
const usersController = require('./controllers/users');

//Middleware
app.use(express.json());

//Controllers
app.use('/api/users', usersController);

app.listen(8080, () => {
  console.log('They see me rollin...on port 8080...');
});