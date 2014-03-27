var express = require('express');
var app = express();

var soap = require('soap');

var request = require('request');
request.defaults({
    strictSSL: false, // allow us to use our self-signed cert for testing
    rejectUnauthorized: false
});
app.use(express.bodyParser());
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


//Plain text response
app.get('/', function(req, res) {
    res.type('text/plain');
    res.send('Hello world');
});

//JSON response
app.get('/api', function(req, res) {
    res.json({
        dataType: "json"
    });
});

//req.params
app.get('/api/params/:id', function(req, res) {
    var id = req.params.id;
    res.json({
        data: id
    })
});



app.listen(process.env.PORT || 5000);