const express = require("express");
const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser
} = require("../Controllers/userController");
// const bcrypt = require('bcrypt')
// const { handlerNewUser } = require("../Controllers/registerController");
const router = express.Router();

// GET all users
router.get("/", getUsers);

//Get a single user
router.get("/:id", getUser);

//Post a new User
router.post("/", createUser);

//Post a new User
router.delete("/:id", deleteUser);

//Post a new User
router.patch("/:id", updateUser);

module.exports = router;
