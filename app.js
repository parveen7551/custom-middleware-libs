var express =   require('express');
var app =   express();
var requestChecker = require('./middleware');

// add request checker Middleware 
app.use(requestChecker);


app.use(function(req,res) {
    res.send('Hello there !');
});

app.listen(3000);