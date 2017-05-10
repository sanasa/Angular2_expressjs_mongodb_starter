var express = require('express');
var app = express();

require('./db')(app);
require('./parser')(app);
  
var users = require('../routes/user');

app.get("/", function (req, res) {
    res.render('index');

})

app.route('/users').get(users.getAll).post(users.createOne);
module.exports = app;
