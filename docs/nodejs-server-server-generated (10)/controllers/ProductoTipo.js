'use strict';

var utils = require('../utils/writer.js');
var ProductoTipo = require('../service/ProductoTipoService');

module.exports.createProductoTipos = function createProductoTipos (req, res, next, body) {
  ProductoTipo.createProductoTipos(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProductoTipos = function deleteProductoTipos (req, res, next, body, id) {
  ProductoTipo.deleteProductoTipos(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editProductoTipos = function editProductoTipos (req, res, next, body, id) {
  ProductoTipo.editProductoTipos(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductoTipoById = function getProductoTipoById (req, res, next, id) {
  ProductoTipo.getProductoTipoById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductoTipos = function getProductoTipos (req, res, next) {
  ProductoTipo.getProductoTipos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
