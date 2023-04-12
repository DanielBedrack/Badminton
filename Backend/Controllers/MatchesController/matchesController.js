const Match = require("../../Models/MatchModels/matchModel");
const mongoose = require("mongoose");

// GET all Matches
const getAllMatches = async (req, res) => {
  const matches = await Match.find({}).sort({ createdAt: -1 });

  res.status(200).json(matches);
};

// GET a single Match
const getMatch = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ error: "No such Match" });
  }

  const match = await Match.findById(id);
  if (!match) {
    return res.status(404).json({ error: "No such Match" });
  }

  res.status(200).json(match);
};

// POST new Match
const postMatch = async (req, res) => {
  console.log('hello from postMatch')
  const { match } = req.body;
  if ( !match )
    return res.status(400).json({ messagge: "Match is required" });

  try {
    //create and store the new MATCH
    const newMatch = await Match.create({
      match: match
    });

    res.status(200).json({ success: `${newMatch} Has been created` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a User
const deleteMatch = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ error: "No such Match" });
  }

  const match = await Match.findByIdAndDelete({ _id: id });
  if (!match) {
    return res.status(400).json({ error: "No such Match" });
  }

  res.status(200).json(match);
};
// Update a user
const updateMatch = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ error: "No such Match" });
  }

  const match = await Match.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!match) {
    return res.status(400).json({ error: "No such Match" });
  }
  res.status(200).json(match);
};

module.exports = {
  getAllMatches,
  getMatch,
  postMatch,
  deleteMatch,
  updateMatch,
};
