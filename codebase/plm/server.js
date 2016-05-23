var express = require('express');
var bodyparser = require('body-parser');
var connection = require('./config/server.config.db');
var genreRoute = require('./app/routes/server.routes.genre');
var bookRoute = require('./app/routes/server.routes.book');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

connection.init();
genreRoute.configure(app);
bookRoute.configure(app);

app.get('/', function(req, res){
  res.redirect('/index.html');
});

//app.get('*', function (req, res) {
//    res.sendfile('/index.html'); // load the single view file (angular will handle the page changes on the front-end)
//});

var server = app.listen(8000, function () {
    console.log('Server listening on port ' + server.address().port);
});