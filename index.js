var express = require('express');
var bodyParser = require('body-parser');
var cat_routes = require("./routes/cat");
var home_routes = require('./routes/home');
var mongoose = require('mongoose');

mongoose.connect('mongodb://yellowdogtech-play-by-play-3391429:27017/cats');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

home_routes(app);
cat_routes(app);


var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    console.log('running!');
});

