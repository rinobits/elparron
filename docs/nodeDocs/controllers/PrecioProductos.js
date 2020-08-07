'use strict';

var utils = require('../utils/writer.js');
var PrecioProductos = require('../service/PrecioProductosService');

module.exports.createprecioProducto = function createprecioProducto (req, res, next, body) {
  PrecioProductos.createprecioProducto(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editprecioProductos = function editprecioProductos (req, res, next) {
  PrecioProductos.editprecioProductos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getprecioProductos = function getprecioProductos (req, res, next, sucursal_id) {
  PrecioProductos.getprecioProductos(sucursal_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
