'use strict';

var utils = require('../utils/writer.js');
var Productos = require('../service/ProductosService');

module.exports.createProductos = function createProductos (req, res, next, body) {
  Productos.createProductos(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProductos = function deleteProductos (req, res, next, body, id) {
  Productos.deleteProductos(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editProductos = function editProductos (req, res, next, id) {
  Productos.editProductos(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductoById = function getProductoById (req, res, next, id) {
  Productos.getProductoById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductos = function getProductos (req, res, next) {
  Productos.getProductos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
