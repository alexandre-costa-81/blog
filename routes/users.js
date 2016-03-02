var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Usuario = require('../models/Usuario.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Usuario.find(function (err, usuarios) {
    if (err) return next(err);
    res.render('usuario/index', {usuarios: usuarios});
  });
});

/* GET users listing. */
router.get('/create', function(req, res, next) {
  res.render('usuario/create', { title: 'Usuário' });
});

/* POST /contato */
router.post('/', function(req, res, next) {
  Usuario.create(req.body, function (err, post) {
    if (err) return next(err);
    //res.json(post);
    res.redirect('/usuario');
  });
});

router.get('/:id/edit', function(req, res, next) {
  Usuario.findById(req.params.id, function(err, usuario){
    if(err) res.send(err);
    //res.json(usuario);
    res.render('usuario/edit', {usuario: usuario});
  });
});

/* PUT /usuario/:id */
router.put('/:id/edit', function(req, res, next) {
  res.json(post);
  Usuario.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    //res.redirect('/usuario');
    res.json(post);
  });
});

module.exports = router;
