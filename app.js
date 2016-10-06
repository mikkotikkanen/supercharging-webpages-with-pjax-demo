var express = require('express'),
    app = express();


// Set static files and logging
app.use(express.static('./public'));
app.use(require('morgan')('dev'));


// Redirect from root to first page
app.get('/', function(req, res) {
  res.redirect('/page1');
});

// Set current site version for PJAX
app.use(function(req, res, next) {
  res.header('X-PJAX-Version', 1);
  next();
});

// Send two HTML pages
app.get('/page1', function(req, res) {
  res.sendFile(__dirname+'/page1.html');
});
app.get('/page2', function(req, res) {
  res.sendFile(__dirname+'/page2.html');
});



console.log('');
console.log('');
console.log('  SUPERCHARGING WITH PJAX - DEMO RUNNING IN PORT 8080');
console.log('');
console.log('------------------------------------------------------------------');
console.log('');
app.listen(8080);