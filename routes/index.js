var express = require('express');
var router = express.Router();
var plus = require('../lib/plus')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sum',  function(req, res, next) {
  var num1 = parseInt(req.param('num1', 0), 10);
  var num2 = parseInt(req.param('num2', 0), 10);
  var sum = plus(num1, num2)
  res.header("content-type", "application/json; charset=utf-8")
  res.end(JSON.stringify({
    num1,
    num2,
    sum
  }))
})

module.exports = router;
