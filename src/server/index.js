const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
var path = require('path');

const app = express();

let rawdata = fs.readFileSync('Data.json');
let data = JSON.parse(rawdata);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('dist'));

// designates what port the app will listen to for incoming requests
app.listen(3000, function() {
  const port = 'working on port 3000';
  console.log(port);
});

app.get('/table', function(req, res) {
  res.sendFile(path.join(__dirname + '../../../dist/dataTable.html'));
});

app.get('/Data', function(req, res) {
  res.send(data);
});

app.post('/Data', function(req, res) {
  let finalData = [];
  finalData.push(...data);
  finalData.push(req.body);
  let Data = JSON.stringify(finalData);
  fs.writeFile('Data.json', Data, err => {
    if (err) throw err;
    console.log('Data written to file');
  });
  res.redirect('table');
});
