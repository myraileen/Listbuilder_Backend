# List Builder Backend
## Overview
The __**[listbuilder app REACT frontend](https://github.com/dvorakkarrie/list-builder-app)**__ integrates with a Node.js/Express/Mongoose backend.

## Repo & Deployment links
* __**[Node/Express/Mongodb github Repository](https://github.com/myraileen/listbuilder_backend)**__
* __**[Backend Heroku deployment](https://listbuilder-backend.herokuapp.com/)**__

Note: prior to implementing the node/express/mongo backend, we considered implementing a django/postgres backend and one was built but not fully flushed out and used as there was concern for cors/communicating with the frontend. JWT token implementation was researched but did not have time to implement in either. Linked here is the django/postgres backend repo: 
* __**[django/mongodb backend](https://github.com/myraileen/List_Builder_Backend)**__

---

## Data Models
![ERD](https://res.cloudinary.com/myraileen/image/upload/v1587427814/ERD_tjioas.jpg)

## API routes
| Path | Transaction | Description |
| --- | :---:| :---: |
| / | GET, POST | Called by React frontend to get Users data model that is 'populated' with the users Items and Lists |
| /users/`<id>` | GET, PUT, UPDATE, DELETE | CRUD for an individual User instance |
| /new-list/ | PUT  | called by React frontend passing a userId and ListId to create a list and push it into User's List array |
| /delete-list/`<userId>`/`<listId>` | DELETE | called by React frontend to delete a list and remove it from the User's List array |
| /new-item/ | PUT | called by React frontend passing a userId and ItemId to add an Item to the User's Item array. 
| /delete-item/`<userId>`/`<listId>` | DELETE | called by React frontend passing the userId and listId to delete an Item from a User's List
| /new-list-item/ | PUT | adds NEW Item instance and updates the user and list item arrays) 
| /add-list-item/ | PUT | called by React frontend passing a listId and itemId to push an existing Item instance into a User's List 

---

## Developer Notes

(I learned the async/await method with the node/express/mongo project... among many, many other 'things'.)

---

## Installation Requirements
```
$ npm install express mongoose cors httpie
```
