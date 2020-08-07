'use strict';

var utils = require('../utils/writer.js');
var Producto = require('../service/ProductoService');

module.exports.createProductos = function createProductos (req, res, next, body) {
  Producto.createProductos(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProductos = function deleteProductos (req, res, next, body, id) {
  Producto.deleteProductos(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editProductos = function editProductos (req, res, next, id) {
  Producto.editProductos(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductoById = function getProductoById (req, res, next, id) {
  Producto.getProductoById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductos = function getProductos (req, res, next) {
  Producto.getProductos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
