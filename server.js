var express  = require('express');
var app      = express();
var port     = process.env.PORT || 80;
var mongoose = require('mongoose');
var passport = require('passport');

var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

mongoose.connect( process.env.MONGO_URI || "mongodb://127.0.0.1/reminisc", function(err) {
    if (err) throw err;
});

require('./config/passport')(passport);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ secret: 'lookhowsecretthissecretis' }));
app.use(passport.initialize());
app.use(passport.session());

require('./app/routes.js')(app, passport);

app.use('/assets', express.static('assets'));

app.get('*', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

app.listen(port);
console.log('Server running on port ' + port);
