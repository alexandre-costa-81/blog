var mongoose = require('mongoose');

var ContatoSchema = new mongoose.Schema({
  titulo: String,
  conteudo: String,
  email: String,
  dt_alteracao: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contato', ContatoSchema);
