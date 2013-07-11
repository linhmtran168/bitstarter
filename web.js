var express = require('express'),
    fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // Read the content of the html
  fs.readFile('index.html', function(err, data) {
    var content = data.toString();
    response.send(content);
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
