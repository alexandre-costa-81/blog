var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Contato = require('../models/Contato.js');

/* GET users listing. */
router.get('/list', function(req, res, next) {
  Contato.find(function (err, contatos) {
    if (err) return next(err);
    res.json(contatos);
  });
});

/* POST /contato */
router.post('/', function(req, res, next) {
  Contato.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
