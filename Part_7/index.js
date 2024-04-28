const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));  
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs'); 

app.get('/', function (req, res) {
fs.
  res.render("index");                         //Simple Route 
});


app.listen(8000, function (){
  console.log("listening on on port");         //Running your server
})

