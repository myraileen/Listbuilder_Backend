# List Builder Backend
# Overview
The listbuilder app REACT frontend will integrate with this Node.js/Express/Mongoose backend.

## Data Models
Link to [ERD](https://dbdiagram.io/d/5e924af039d18f5553fd74eb)

## API routes
| Path | Transaction |
| --- | :---:|
| /users | GET, POST |
| /users/`<id>` | GET, PUT, UPDATE, DELETE |
| /new-list/ | PUT (with userID, adds list doc, updates user list array) |
| /delete-list/`<userId>`/`<listId>` | DELETE |
| /new-item/ | PUT (with userID, adds item doc, updates user item array) |
| /delete-item/`<userId>`/`<listId>` | DELETE |
| /new-list-item/ | PUT (adds new item doc, updates user and list item arrays) |
| /add-list-item/ | PUT (updates user and list with existing item) |

## Installation Requirements
```
$ npm install express mongoose cors
```
