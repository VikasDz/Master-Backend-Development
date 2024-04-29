const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  fs.readdir(`./files`, function (err, files) {
    res.render("index", { files: files });
  })
});

app.post('/create', function (req, res) {
  fs.writeFile(`./files/${req.body.task.split(' ').join('')}.txt`, req.body.description, function (err) {
    res.redirect('/');
  });
})


app.post('/edit', function (req, res) {
  const previousName = req.body.perviousname;
  const newName = req.body.newname;
  const description = req.body.Description;

  fs.rename(`./files/${previousName}`, `./files/${newName}`, function (err) {
    if (err) {
      console.error('Error renaming file:', err);
      return res.status(500).send('Error renaming file');
    }

    fs.writeFile(`./files/${newName}`, description, { encoding: 'utf8', flag: 'w' }, function (err) {
      if (err) {
        console.error('Error writing file:', err);
        return res.status(500).send('Error writing file');
      }

      console.log(`File ${newName} renamed and content updated`);
      res.redirect('/');
    });
  });
});


app.get('/file/:filename', function (req, res) {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, filedata) {
    res.render("show", { filename: req.params.filename, filedata: filedata });
  });
})

app.get('/edit/:filename', function (req, res) {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, filedata) {
    res.render("edit", { filename: req.params.filename, filedata: filedata });
  });
})




app.listen(3000, function () {
  console.log("listening on on port");         //Running your server
})

