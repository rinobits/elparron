'use strict';

var utils = require('../utils/writer.js');
var Diaria = require('../service/DiariaService');

module.exports.createDiarias = function createDiarias (req, res, next, body, fecha, sucursal_id) {
  Diaria.createDiarias(body, fecha, sucursal_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteDiarias = function deleteDiarias (req, res, next, fecha, sucursal_id) {
  Diaria.deleteDiarias(fecha, sucursal_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteWeek = function deleteWeek (req, res, next, sucursal_id) {
  Diaria.deleteWeek(sucursal_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editDiarias = function editDiarias (req, res, next, body, fecha, sucursal_id) {
  Diaria.editDiarias(body, fecha, sucursal_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDiariaById = function getDiariaById (req, res, next, fecha, sucursal_id) {
  Diaria.getDiariaById(fecha, sucursal_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDiarias = function getDiarias (req, res, next) {
  Diaria.getDiarias()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
