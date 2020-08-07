'use strict';

var utils = require('../utils/writer.js');
var PrecioTortas = require('../service/PrecioTortasService');

module.exports.createprecioTorta = function createprecioTorta (req, res, next, body) {
  PrecioTortas.createprecioTorta(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editprecioTortas = function editprecioTortas (req, res, next) {
  PrecioTortas.editprecioTortas()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getprecioTortas = function getprecioTortas (req, res, next, sucursal_id) {
  PrecioTortas.getprecioTortas(sucursal_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
