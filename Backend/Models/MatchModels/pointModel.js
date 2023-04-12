const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pointSchema = new Schema({
  point: {
    type: String,
    enum: ["Point", "Mistake", "O-Point", "O-Mistake"],
    required: true,
  },
  shot: {
    type: String,
    enum: ["Clear", "Drop", "Smash", "Drive", "Net", "Other"],
    required: true,
  },
  shotSide: {
    type: String,
    enum: ["Forehand", "Backhand"],
    required: true,
  },
  courtArea: {
    type: String,
    enum: ["Net", "Back Line", "Center Court", "Serve"],
    required: true,
  },
  textArea: {
    type: String,
  },
  pointWinnerName: {
    type: String,
    required: true,
  },
  pointNum: {
    type: Number
  }
});

module.exports = mongoose.model("Point", pointSchema);
