const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const fs = require('fs');
app.use(express.static('dist'));
console.log(__dirname);

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    const port = "working on port 3000"
    console.log(port)
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/Data', function (req, res) {
    let rawdata = fs.readFileSync('Data.json');
    let data = JSON.parse(rawdata);
    res.send(data)

})

app.post('/Data', function (req, res) {
    let rawdata = fs.readFileSync('Data.json');
    let data = JSON.parse(rawdata);
    let finalData = [];
    finalData.push(...data);
    finalData.push(req.body.data);
    let Data = JSON.stringify(finalData);
fs.writeFile('Data.json', Data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});
res.sendStatus(200);
})
