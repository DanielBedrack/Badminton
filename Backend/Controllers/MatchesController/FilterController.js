const Match = require("../../Models/MatchModels/matchModel");

// Filter: Get Matches By NAME
const getMatchesByName = async (req, res) => {
  const { opponentName } = req.params;

  const matches = await Match.find({})
    .populate({
      path: "user",
      opponentName: {opponentName} // use the variable directly
    })
    .exec();

  res.status(200).json(matches);
};

// Filter: Get Matches By AGE
const getMatchesByAge = async (req, res) => {
  const { age } = req.params;

  const matches = await Match.find({})
    .populate({
      path: "user",
      age: {age} // use the variable directly
    })
    .exec();

  res.status(200).json(matches);
};

// Filter: Get Matches By TOURNAMENT
const getMatchesByTournament = async (req, res) => {
  const { tournament } = req.params;

  const matches = await Match.find({})
    .populate({
      path: "user",
      tournament: {tournament}, // use the variable directly
    })
    .exec();

  res.status(200).json(matches);
};
// Filter: Get Matches By COUNTRY
const getMatchesByCountry = async (req, res) => {
  const { country } = req.params;

  const matches = await Match.find({})
    .populate({
      path: "user",
      country: {country} // use the variable directly
    })
    .exec();

  res.status(200).json(matches);
};

// Filter: Get Matches By CLUB
const getMatchesByClub = async (req, res) => {
  const { club } = req.params;

  const matches = await Match.find({})
    .populate({
      path: "user",
      club: {club} // use the variable directly
    })
    .exec();

  res.status(200).json(matches);
};

module.exports = {
  getMatchesByName,
  getMatchesByAge,
  getMatchesByTournament,
  getMatchesByCountry,
  getMatchesByClub
};