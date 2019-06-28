const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(port, function(){
    console.log('Your node.js server is running');
});
































// const express = require('express');
// const app = express();
// const path = require('path');

// app.get('*', function(req, res) {
    
//     req.header("Cache-Control: no-cache, must-revalidate");
//     res.header("cache-control: no-cache");
//     res.sendFile(path.join(__dirname, '../'));

// });

// app.listen(process.env.PORT || 4000, function(){
//     console.log('Your node.js server is running');
// });


//-------------------------------------------------------------------------


// var express = require('express');
// var app = express();

// // set the port of our application
// // process.env.PORT lets the port be set by Heroku
// var port = process.env.PORT || 8080;

// // set the view engine to ejs
// // app.set('view engine', 'ejs');

// // make express look in the public directory for assets (css/js/img)
// app.use(express.static(__dirname + 'build'));

// // // set the home page route
// // app.get('/', function(req, res) {

// //     // ejs render automatically looks in the views folder
// //     res.render('build/index');
// // });

// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build/index.html'));
// });


// app.listen(port, function() {
//     console.log('Our app is running on http://localhost:' + port);
// });








