const express = require("express")
const app = express()
const session = require("express-session")
const mustache = require("mustache-express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
mongoose.Promise = require("bluebird")
const data = require("./data/data")
const MongoClient = require("mongodb")

app.engine('mustache', mustache())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use( express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

var sess = {
  secret: "keyword cat",
  cookie: {},
  saveUninitialized: true,
  resave: true
}

const url = "mongodb://127.0.0.1:27017/robots"

// MongoClient.connect(url, function(err, db) {
//   if (err) {
//     throw err;
//   } else {
//     console.log('Successfully connected to the database');
//   }
//   for (var i = 0; i < data.users.length; i++) {
//     const user = data.users[i];
//     db.collection("users").updateOne(
//       {id: user.id},
//       user,
//       {upsert: true}
//     )
//   }
// })

const userRoutes = require("./routes/users")

app.use(userRoutes)

app.listen(3000, function(){
  console.log("Express started on port 3000")
})
