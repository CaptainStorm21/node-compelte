// console.log("hello world")

var express = require ('express');
var app = express();

app.get('/', function (req, res) {
    res.send("ho ho")
});

app.listen ( 8080, function () {
    console.log("express is on server 8080")
})

//to run it .. node express. js