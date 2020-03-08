const express = require("express")
const path = require("path")
const app = express()
const PORT = process.env.PORT || 8080
const db = require("./db/db.json")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

  app.get("/notes", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });

  app.get("/api/notes", function(req, res) {
    return res.json(db)
  });

  app.post("/api/notes", function(req, res) {
    const idnum = Math.floor(Math.random() * 100000000)
    req.body["id"] = idnum
    const userreq = req.body
    db.push(userreq)
    res.json(userreq)
  });

  app.delete("/api/notes/:id", function(req, res) {
    for (let i = 0; i < db.length; i++) {
      if(req.params.id == db[i].id){
       db.splice([i],1)
       console.log("yeet")
       
      
       }
       else{
         
       }
       res.send()
      
    }
    


  });
  

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  