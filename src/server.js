‘use strict’

var express = require(`express`);
// var mongoose = require(`mongoose`);
var bodyParser = require(`body-parser`);
var mongoose= require("../db/connection");

var app = express();
var router = express.Router();


var port = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get(‘/’, function(req, res) {
 res.json({ message: ‘API Initialized!’});
});

app.use(‘/api’, router);

app.get("/api/posts", function(req, res){
  Post.find({}).then(function(posts){
    res.json(posts)
  });
});

app.listen(port, function() {
 console.log(`api running on port ${port}`);
});
