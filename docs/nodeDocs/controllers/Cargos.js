'use strict';

var utils = require('../utils/writer.js');
var Cargos = require('../service/CargosService');

module.exports.createCargo = function createCargo (req, res, next, body) {
  Cargos.createCargo(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCargo = function deleteCargo (req, res, next, id) {
  Cargos.deleteCargo(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editCargo = function editCargo (req, res, next, id) {
  Cargos.editCargo(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCargos = function getCargos (req, res, next) {
  Cargos.getCargos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCargosById = function getCargosById (req, res, next, id) {
  Cargos.getCargosById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
