const express = require("express");
const router = express.Router();
const {
  getMatchesByName,
  getMatchesByAge,
  getMatchesByTournament,
  getMatchesByCountry,
  getMatchesByClub,
} = require("../Controllers/MatchesController/FilterController");

// GET all users
router.get("/:name", getMatchesByName);

//Get a single user
router.get("/:age", getMatchesByAge);

//Signup a new User
router.get("/:tournament", getMatchesByTournament);

//login a new User
router.get("/:country", getMatchesByCountry);

//Post a new User
router.get("/club", getMatchesByClub);


module.exports = router;
