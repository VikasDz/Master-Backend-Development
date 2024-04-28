const express = require('express')
const app = express()
const path = require('path')

app.use(express.json()); //Use for Handle forms in Backend 
app.use(express.urlencoded({ extended: true }));  //Use for Handle forms in Backend 
app.use(express.static(path.join(__dirname,'public'))); //Use for Handle Public Files in Backend
app.set('view engine', 'ejs');  //Use for Rendering EJS Files in Backend

app.get('/', function (req, res) {
  res.render("index");                         //Simple Route 
});

app.get('/dynamicroute/:username', function (req, res) {
  // res.send("Working on Dynamic Route");   //Dynamic Route Performs
  res.send(req.params.username);
});

app.listen(8000, function (){
  console.log("listening on on port");         //Running your server
})

