// Create web server
// Run: node comments.js
// Access: http://localhost:3000/comments
// Access: http://localhost:3000/comments/1

var express = require('express');
var app = express();
var comments = [
  { name: 'tobi', body: 'wahoo' },
  { name: 'loki', body: 'woot' },
  { name: 'jane', body: 'ya' }
];

app.get('/comments', function(req, res){
  res.send(comments);
});

app.get('/comments/:index', function(req, res){
  var idx = req.params.index;
  var comment = comments[idx];
  res.send(comment);
});

app.listen(3000);
console.log('Express app started on port 3000');