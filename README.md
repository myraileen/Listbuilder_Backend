# List Builder Backend
# Overview
The listbuilder app REACT frontend will integrate with this Node.js/Express/Mongoose backend.

## Data Models
Link to [ERD](https://dbdiagram.io/d/5e924af039d18f5553fd74eb)

## API routes
| Path | Transaction |
| --- | :---:|
| /users | (GET, POST) |
| /users/`<id>` | (GET, PUT, UPDATE, DELETE) |
| /new-list/ | (PUT with userID) |
| /delete-list/`<userId>`/`<listId>` | DELETE |

## Installation Requirements
```
$ npm init -y
$ npm install express mongoose
$ npm install cors
```
