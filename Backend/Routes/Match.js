const express = require("express");
const router = express.Router();
const {
  getAllMatches,
  getMatch,
  postMatch,
  deleteMatch,
  updateMatch,
} = require("../Controllers/MatchesController/matchesController");

// GET all Matches
router.get("/", getAllMatches);

//Get a single Match
router.get("/:id", getMatch);

//Post a new Match
router.post("/add", postMatch);

//Delete a new Match
router.delete("/:id", deleteMatch);

//Post a new Match
router.patch("/:id", updateMatch);

module.exports = router;
