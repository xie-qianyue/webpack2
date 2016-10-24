var express = require('express');
var AV = require('leanengine');
var path = require('path');
var app = express();

var port = process.env.LEANCLOUD_APP_PORT || 3000;

AV.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY,
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
});
app.enable('trust proxy');
app.use(AV.express());
app.use(AV.Cloud.HttpsRedirect());
app.use(express.static(__dirname + '/webpack.js.org/build'));
app.get('/', function(req, res) {
  res.sendFile(path.resolve('./webpack.js.org/build/index/index.html'))
});

app.listen(port);