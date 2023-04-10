const express = require("express");
const {
  signupUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  loginUser
} = require("../Controllers/userController");
// const bcrypt = require('bcrypt')
// const { handlerNewUser } = require("../Controllers/registerController");
const router = express.Router();

// GET all users
router.get("/", getUsers);

//Get a single user
router.get("/:id", getUser);

//Signup a new User
router.post("/signup", signupUser);

//login a new User
router.post("/login", loginUser);

//Post a new User
router.post("/sign", );

//Post a new User
router.delete("/:id", deleteUser);

//Post a new User
router.patch("/:id", updateUser);

module.exports = router;
