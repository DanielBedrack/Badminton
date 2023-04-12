const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema;

// POINT SCHEMA
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
const setSchema = new Schema({
  setWinnerName: { type: String, required: true },
  points: [pointSchema],
});

const opponentSchema = new Schema({
  opponentName: { type: String, required: true },
  tournament: { type: String, required: true },
  club: { type: String, required: true },
  age: { type: String, enum: ["U11", "U13", "U15", "U17", "U19", "Pro"] },
  strongHand: { type: String, enum: ["Right", "Left"] },
  country: { type: String, required: true },
});

const matchSchema = new Schema({
  opponent: opponentSchema,
  set: setSchema,
});


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
      unique: true,
    },
    matches: [matchSchema]
  },
  { timestamps: true }
);

// static signup method
userSchema.statics.signup = async function(username, password, mail) {

  //validation
  if (!username || !password || !mail){
    throw Error('All fields must be field')
  }
  if(!validator.isEmail(mail)){
    throw Error('Email is not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exist = await this.findOne({ mail })

  if(exist) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hashPwd = await bcrypt.hash(password, salt)

  const user = await this.create({ username, password: hashPwd, mail })

  return user;
}

userSchema.statics.login = async function(username, password) {

  if (!username || !password) {
    throw Error("All fields must be field");
  }
  
  const exist = await this.findOne({ username });
  if (!exist) {
    throw Error('Incorrect Username')
  }

  const match = await bcrypt.compare(password , exist.password)
  if (!match) {
    throw Error('Incorect Password')
  }

  return exist;
}
module.exports = mongoose.model('User', userSchema)
