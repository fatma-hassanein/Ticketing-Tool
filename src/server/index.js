const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));
console.log(__dirname);

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    const port = "working on port 3000"
    console.log(port)
})

// app.get('/', function (req, res) {
//     res.sendFile('dist/index.html')
// })

app.get('/Data', function (req, res) {
    
})

app.post('/Data', function (req, res) {

})
