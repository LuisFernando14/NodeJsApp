var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My website' });
});

router.get('/joseph', function(req, res, next) {
    res.render('joseph', { empresa: 'ConCrédito' });
});



module.exports = router;
