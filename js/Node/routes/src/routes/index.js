var express = require('express');
var router = express.Router();

/* GET home page. */
fetch('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

module.exports = router;
