
const express = require("express")
const router = express.Router()
// const data = require("../data/data")
const MongoClient = require("mongodb")

const MONGO_URL = "mongodb://127.0.0.1:27017/user-directory-daily-mongo"


router.get ("/", function(request, response){
  MongoClient.connect(MONGO_URL, function(err, db) {
      db.collection("users").find().toArray().then(function(users) {
        response.render("index", {
          users: users
        })
      })
    })
  })


router.get('/users/:id', function(request, response){
  MongoClient.connect(MONGO_URL, function(err, db){
    db.collection("users").findOne({
      _id: MongoClient.ObjectID(request.params.id)
    }).then(function(robot){
      response.render("robot", {
        robot: robot
      })
    })
  })
})

router.get("/register", function(req, res) {
  res.render("register")
})

// router.get('/users/:id', function(request, response){
//   const idWeWant = parseInt(request.params.id)
//   let robot = false;
//   for (var i = 0; i < data.users.length; i++) {
//     if(data.users[i].id === idWeWant){
//       robot = data.users[i]
//     }
//   }
//   response.render("robot", {
//     robot: robot
//   })
// })

module.exports = router
