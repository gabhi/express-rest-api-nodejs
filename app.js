var express = require('express');
var app = express();


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