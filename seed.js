const mongoose = require("mongoose");
const User = require("./modules/user");
const Business = require("./modules/business");
const Campaign = require("./modules/campaign");

mongoose
  .connect("mongodb://127.0.0.1:27017/WIL")
  .then(() => {
    console.log("Mongo Connection Open");
  })
  .catch(() => {
    console.log("Error in mongo connection");
  });

const seedUser = [
  {
    firstName: "Rahul",
    lastName: "Shakha",
    email: "rahul.sakha@email.com",
    address: "Sydney, NSW",
    password: "rahul123",
    termsAndCondition: true
  },
  {
    firstName: "Utkrist",
    lastName: "Shrestha",
    email: "utkrist.shakha@email.com",
    address: "Sydney, NSW",
    password: "Utkrist123@22",
    termsAndCondition: true
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.sa@email.com",
    address: "Ashfield, NSW",
    password: "Doestobe123",
    termsAndCondition: false
  }
];

User.insertMany(seedUser)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
