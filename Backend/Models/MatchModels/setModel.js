const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const setSchema = new Schema({
  setNumber: {
    type: Number,
    required: true
  },
  points: [{
    type: mongoose.Types.ObjectId,
    ref:"Point"
  }],
});

module.exports = mongoose.model("Set", setSchema);
