const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//login user
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.login(username, password);
    const token = createToken(user._id);

    res.status(200).json({ success: user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Signup new User
const signupUser = async (req, res) => {
  const { username, password, mail } = req.body;

  try {
    const user = await User.signup(username, password, mail); // MATCH.CREATE
    const token = createToken(user._id);

    res.status(200).json({ success: user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET all Users
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
};

// GET a single User
const getUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ error: "No such User" });
  }

  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }

  res.status(200).json(user);
};

// Delete a User
const deleteUser = async (req, res) => {
  const { id } = req.params.id;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ error: "No such User" });
  }

  const user = await User.findByIdAndDelete({ _id: id });
  if (!user) {
    return res.status(400).json({ error: "No such User" });
  }

  res.status(200).json(user);
};

// Update a user
const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ error: "No such User" });
  }

  const user = await User.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!user) {
    return res.status(400).json({ error: "No such User" });
  }
  res.status(200).json(user);
};

module.exports = {
  signupUser,
  loginUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};
