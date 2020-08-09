'use strict';

var utils = require('../utils/writer.js');
var Precio = require('../service/PrecioService');

module.exports.createprecioProducto = function createprecioProducto (req, res, next, body) {
  Precio.createprecioProducto(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editprecio = function editprecio (req, res, next, body) {
  Precio.editprecio(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getprecio = function getprecio (req, res, next, sucursal_id) {
  Precio.getprecio(sucursal_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
