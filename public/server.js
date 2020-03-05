const express = require("express")
const path = require("path")
const app = express()
const PORT = 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/notes", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "notes.html"));
  });

  app.get("/api/notes", function(req, res) {
    // console.log(res.body);
  });
  

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  