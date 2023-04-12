const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema;

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
    matches: [{
      type: mongoose.Types.ObjectId,
      ref:"Match",
    }]
  },
  { timestamps: true }
);

// static SIGNUP method
userSchema.statics.signup = async function(username, password, mail) {

  // Validation
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

// static LOGIN method
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
