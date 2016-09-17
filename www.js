var express = require('express');
var path = require('path');
var bodyParser = require('body-Parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', __dirname);
app.set('view engine', 'html');
app.engine('html',require('ejs').renderFile);

app.use(express.static(__dirname));
//console.log(__dirname)


app.get('/',function(req,res){
    res.render('aj.html')
});

app.get('/getlist',function(req,res){
    res.send('get success');
});

app.post('/getlist',function(req,res){
    var body = req.body;
    var user = body.user;
    var password = body.password;
    res.send(user+'|'+password);
});

app.listen(9090);

