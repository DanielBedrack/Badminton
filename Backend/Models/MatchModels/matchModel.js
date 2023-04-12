const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = new Schema({
  opponent: {
    type: mongoose.Types.ObjectId,
    ref:"Opponent"
  },
  set: [{
    type: mongoose.Types.ObjectId,
    ref:"Set"
  }],
});

module.exports = mongoose.model("Match", matchSchema);
