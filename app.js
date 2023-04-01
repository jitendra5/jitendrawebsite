var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var axios = require('axios');
const path = require('path');
var app = express();

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});