var express = require('express');
var router = express.Router();
var sumController = require('../controller/sumController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sum', sumController)

module.exports = router;
