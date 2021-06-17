var express = require('express');
var app = express();

var things = require('./things.js');

//both index.js and things.js should be in same directory
app.use('/things', things);
app.get('/hello', function(req, res) {
    res.send("Hello world!");
});
app.post('/hello', function(req, res) {
    res.send("You just called the post method at '/hello'!\n")
})

app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
})

app.get('/:id', function(req, res) {
    res.send('The id you specified is ' + req.params.id)
})

app.listen(3001);