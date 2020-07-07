'use strict';

var utils = require('../utils/writer.js');
var Armar = require('../service/ArmarService');

module.exports.createPedido = function createPedido (req, res, next, body) {
  Armar.createPedido(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePedido = function deletePedido (req, res, next, id) {
  Armar.deletePedido(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editPedido = function editPedido (req, res, next, id) {
  Armar.editPedido(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPedidos = function getPedidos (req, res, next) {
  Armar.getPedidos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPedidosById = function getPedidosById (req, res, next, id) {
  Armar.getPedidosById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
