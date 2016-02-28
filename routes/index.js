var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sobre', function(req, res, next) {
  res.render('pages/sobre', { title: 'Sobre' });
});

router.get('/contato', function(req, res, next) {
  res.render('pages/contato', { title: 'Contato' });
});

module.exports = router;
