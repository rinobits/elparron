'use strict';

var utils = require('../utils/writer.js');
var Sucursales = require('../service/SucursalesService');

module.exports.createSucursales = function createSucursales (req, res, next, body) {
  Sucursales.createSucursales(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSucursales = function deleteSucursales (req, res, next, body, id) {
  Sucursales.deleteSucursales(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editSucursales = function editSucursales (req, res, next, id) {
  Sucursales.editSucursales(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSucursalById = function getSucursalById (req, res, next, id) {
  Sucursales.getSucursalById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSucursales = function getSucursales (req, res, next) {
  Sucursales.getSucursales()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
