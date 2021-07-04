var express = require("express"),
  app = express(),
  fs = require('fs'),
  path = require('path'),
  filePath = path.join(__dirname, '83B503C0C6BBA81B444A9DFCC1311794.txt'),
  bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/.well-known/pki-validation/83B503C0C6BBA81B444A9DFCC1311794.txt', function (req, res) {
  fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
    if (!err) {
      console.log('received data: ' + data);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    } else {
      console.log(err);
    }
  });
});

app.listen(5000, function () {
  console.log("Listening on port " + 5000);
})
