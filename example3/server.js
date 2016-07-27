var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/json', function (req, res) {
  res.json({a:3});
});

app.get('/greet', function (req, res) {
  var name = req.query.name;
  res.send('Hello, ' + name);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
