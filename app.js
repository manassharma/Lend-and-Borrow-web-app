var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var methodOverride = require('method-override');

var app = express();

// view engine setup
app.set('port', process.env.port||3000);
app.set('views',__dirname+'/views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/signUp');

var Schema = mongoose.Schema({
  _id: String,
  password: String,
  name: String
});

var userInfo = mongoose.model('information', Schema);

app.post('/newUser', function(req, res){
  new userInfo({
    _id: req.body.InputEmail,
    password: req.body.InputPassword,
    name: req.body.InputName
  }).save(function(err, doc){
    if(err){
      res.json(err);
    }
    else{
      res.send("User Created Successfully!");
    }
  });
});

app.get('/getUser', function(req, res){
  userInfo.findOne({_id: req.param('email'), password: req.param('password')}, function(err, user){
    if(user==null || user==undefined){
      res.send("Invalid username or password");
    }
    var temp = user.toObject().name;
    res.send("Logged in as "+ temp);
})
});

module.exports = app;
