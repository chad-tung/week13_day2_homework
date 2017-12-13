var express = require('express');
var parser = require('body-parser');
var app = express();
var path = require('path')
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/entertainment', function(err, client) {
  if(err) {
    console.log(err);
  }
  db = client.db("entertainment");
  console.log("Connected to database.");

  app.listen(3000, function() {
    console.log("Listening on port 3000");
  });
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');
});

app.get('/movies', function(req, res){
  db.collection("movies").find().toArray(function(err, results) {
    if(err) {
      console.log(err);
    }
    res.json(results);
  });
})

app.post("/movies", function(req, res) {
  db.collection("movies").save(req.body, function(err, result) {
    if(err) {
      return console.log(err);
    }

    console.log("Saved to database.");
    res.redirect("/");
  });
});

app.post("/delete", function(req, res) {
  db.collection("movies").deleteMany({});
  res.redirect("/");
});
