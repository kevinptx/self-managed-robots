const express = require("express")
const app = express()
const mustache = require("mustache-express")
const data = require("./data/data")
const MongoClient = require("mongodb")

app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use( express.static('public'))

const url = "mongodb://127.0.0.1:27017/user-directory-daily-mongo"

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
