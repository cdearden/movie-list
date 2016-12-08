var express = require('express');
var app = express();

/////////////////////////////////////////
// TODO: put this code in a seperate file
var fs = require('fs');
var Promise = require('bluebird');

var paths = {
  index: __dirname + '/../client/index.html'
};

var serveAsset = function(asset, res) {
  var readFile = Promise.promisify(fs.readFile);

  return readFile(asset, 'utf8')
  .then(function(fileContents) {
    console.log("Asset served.");
    res.send(fileContents);
  })
  .catch(function(err) {
    console.log("Unable to serve asset", err);
    res.status(404);
    res.send(null);
  });
};
/////////////////////////////////////////

app.use(express.static('../client'));

app.get('/', function(req, res) {
  console.log(paths.index);
  // res.send('Hi');
  serveAsset(paths.index, res);
});



var port = 3000;
app.listen(port, function() {
  console.log("Server listening on port " + port);
});
