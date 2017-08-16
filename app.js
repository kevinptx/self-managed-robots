const express = require("express")
const app = express()
const mustache = require("mustache-express")
const data = require("./data")
app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use( express.static('public'))

app.get ("/", function(request, response){
  response.render ('index', {
    robots: data.users
  })
})

app.get('/users/:id', function(request, response){
  const idWeWant = parseInt(request.params.id)
  let robot = false;
  for (var i = 0; i < data.users.length; i++) {
    if(data.users[i].id === idWeWant){
      robot = data.users[i]
    }
  }
  response.render("robot", {
    robot: robot
  })
})

app.listen(3000, function(){
  console.log("Express started on port 3000")
})
