const mongoose = require("./connection");
const User = require("../models/User");
const Item = require("../models/Item");
const List = require("../models/List");

// User.deleteMany({})
// 	.then(
// 		list => {
// 			List.deleteMany().then(
// 				item => {
// 					Item.deleteMany().then(
// 						_ => {
// 							console.log("emptied, creating data now")
// 							createData()
// 						},
// 						rej => {
// 							console.log(rej)
// 						}
// 					)
// 				},
// 				rej => {
// 					console.log(rej)
// 				}
// 			)
// 		},
// 		rej => {
// 			console.log(rej)
// 		}
// 	)
// 	.catch(err => {
// 		console.log(err)
// 	})

function createData() {
  User.create({
    user_id: "someuser",
    status: "1",
    first_name: "Some",
    last_name: "User",
    email_address: "xxx",
    photo_url: "xxx",
  }).then((user) => {
    Promise.all([])
      .then((items) => {
        items.forEach((item) => {
          item.save();
        });
        Promise.all([
          Item.create({
            item: "oranges",
            item_type: "1",
            item_desc: "groceries",
            status: "1",
            image_url: "xxx",
            item_qty: "2",
          }),
          Item.create({
            item: "apples",
            item_type: "1",
            item_desc: "groceries",
            status: "1",
            image_url: "yyy",
            item_qty: "2",
          }),
        ]).then((items) => {
          items.forEach((item) => {
            user.items.push(item);
            item.save();
          });
          user.save();
          console.log("created user:", user.user_id);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

createData();
