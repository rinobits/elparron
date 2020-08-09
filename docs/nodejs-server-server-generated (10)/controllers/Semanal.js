'use strict';

var utils = require('../utils/writer.js');
var Semanal = require('../service/SemanalService');

module.exports.createSemanal = function createSemanal (req, res, next, body, fecha, sucursal_id) {
  Semanal.createSemanal(body, fecha, sucursal_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editSemanal = function editSemanal (req, res, next, body, fecha, sucursal_id) {
  Semanal.editSemanal(body, fecha, sucursal_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSemanalById = function getSemanalById (req, res, next, fecha, sucursal_id) {
  Semanal.getSemanalById(fecha, sucursal_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
