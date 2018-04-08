var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(req, res) {
  res.sendFile(__dirname+'/public/index.html');

});
var server = app.listen(3011, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("my eleme angular listen at //%s:%s", host, port);
});
