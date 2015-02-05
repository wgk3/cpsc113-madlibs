'use strict';


// Set-up the application
// 
var express = require('express');
var nunjucks = require('nunjucks');
var app = express();
nunjucks.configure('views', {
    autoescape: true,
    express: app
});


// Import out "models"
// 
var nouns = require('./models/nouns.js');
var verbs = require('./models/verbs.js');
var adjectives = require('./models/adjectives.js');

// Handle HTTP requests
// 
app.get('/', function (req, res) {
  var contextData = {
    nouns: nouns,
    verbs: verbs,
    adjectives: adjectives
  };
  res.render('layout.html', contextData);
});

// Start the server
// 
var port = process.env.PORT || 4000;
var ip = process.env.IP || 'localhost';
var server = app.listen(port, function () {
  console.log('Example app listening at http://%s:%s', ip, port);
})