var express = require('express');
var { words } = require('./words');
var cors = require('cors')

var app = express()

app.use(cors())

app.get('/', function(req, res){
  const wordReturn = {
    words: words
    .replaceAll('\n', ' ')
    .split(' ')
    .filter(w => w !== '')
    .map(w => w.toLowerCase())
  }
  
  res.send(wordReturn);
});

const port = 3001
app.listen(port);
console.log(`Express started on port ${port}`);