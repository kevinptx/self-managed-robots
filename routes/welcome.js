const express = require("express")
const router = express.Router()
const NewUser = require("../models/User")
const bcrypt = require("bcryptjs")
const users = require("../models/Robots")

router.get("/signin", function(req, res){
  res.render("welcome")
})

router.post("/signin", function(req, res){
  const username = req.body.username
  const password = req.body.password

  NewUser.findOne({username: username}).then(function(user){
    if (!user) {
      //no user found so try again. render back to welcome page
      res.render("welcome", {
        message: "User Not Found. Info Incorrect"
      })
    } else {
      //if user IS found then redirect to root page (index)
      if(bcrypt.compareSync(password, user.passwordHash)){
        req.session.user = user
        res.redirect("/")
      } else {
        //if no user is found, try again
        res.render("welcome", {
          message: "User Not Found. Info Incorrect"
        })
      }
    }
  })
})

module.exports = router
