'use strict';

var utils = require('../utils/writer.js');
var Sobrante = require('../service/SobranteService');

module.exports.createSobrantes = function createSobrantes (req, res, next, body, fecha, sucursal_id) {
  Sobrante.createSobrantes(body, fecha, sucursal_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editSobrantes = function editSobrantes (req, res, next, body, fecha, sucursal_id) {
  Sobrante.editSobrantes(body, fecha, sucursal_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSobranteById = function getSobranteById (req, res, next, fecha, sucursal_id) {
  Sobrante.getSobranteById(fecha, sucursal_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
