const mongoose = require("mongoose")

const newRobotSchema = new mongoose.Schema({
  id: Number,
  name: String,
  avatar: String,
  email: String,
  phone: String,
  university: String,
  company: String,
  job: String,
  skills: String,
})

const users = mongoose.model("users", newRobotSchema)

module.exports = users
