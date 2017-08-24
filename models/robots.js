const mongoose = require("mongoose")
// do the stuff

// define the schema
const robotSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  username: {type: String, required: true}
  password: {type: String, required: true}
  email: {type: String, required: true}
  phoneNumber: {type: Number, required: true}
  university: {type: Number, required: true}
  company: {type: Number, required: true}
  job: {type: Number, required: true}
  skills: {type: Number, required: true}
})

const newRobot = mongoose.model("newRobot", newRobotSchema)
// create a model using that schema

// export the stuff
module.exports = newRobot;
