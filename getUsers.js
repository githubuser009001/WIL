const mongoose = require("mongoose");
const User = require("./modules/user");

mongoose
  .connect("mongodb://127.0.0.1:27017/WIL")
  .then(() => {
    console.log("Mongo Connection Open");
  })
  .catch(() => {
    console.log("Error in mongo connection");
  });

User.find({})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
