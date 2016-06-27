var express = require('express');
var bodyParser = require('body-parser');
var cats = require("./cats")

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



cats(app);

var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    console.log('running!')
});

