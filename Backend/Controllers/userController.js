const User = require("../Models/userModel");
const mongoose = require('mongoose')

// GET all Users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)
}

// GET a single User
const getUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({error: 'No such User'})
    }

    const user = await User.findById(id)
    if(!user){
        return res.status(404).json({error: 'No such user'})
    }

    res.status(200).json(user)
}

// POST new User
const createUser = async (req, res) => {
    const { username, password, mail } = req.body;
    if (!username || !password || !mail)
      return res
        .status(400)
        .json({ messagge: "Name, password and mail are required" });

    // check for duplication in db
    const duplication = await User.findOne({ username: username }).exec();
    if (duplication) return res.sendStatus(400); // Conflict

    try {
      // encrypt the password
      // const hashedPwd = await bcrypt.hash(pwd, 10);

      //create and store the new user
      const result = await User.create({
        username: username,
        password: password,
        mail: mail,
      });

      res.status(200).json({ success: `${result} \nHas been created` });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}

// Delete a User
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ error: "No such User" });
  }

  const user = await User.findByIdAndDelete({_id: id})
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

  const user = await User.findOneAndUpdate({_id: id}, {
    ...req.body
  })
  if (!user) {
    return res.status(400).json({ error: "No such User" });
  }
  res.status(200).json(user);
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};