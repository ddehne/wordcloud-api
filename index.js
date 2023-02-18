var express = require('express');
var { words } = require('./words');

var app = express()



app.get('/', function(req, res){
  const wordReturn = {
    words: words
    .replaceAll('\n', ' ')
    .replaceAll('\.', ' ')
    .replaceAll('?', ' ')
    .replaceAll('…', ' ')
    .split(' ')
    .filter(w => w !== '')
    .map(w => w.toLowerCase())
  }
  
  res.send(wordReturn);
});

app.listen(3001);
console.log('Express started on port 3000');