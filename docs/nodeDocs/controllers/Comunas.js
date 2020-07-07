'use strict';

var utils = require('../utils/writer.js');
var Comunas = require('../service/ComunasService');

module.exports.createComunas = function createComunas (req, res, next, body) {
  Comunas.createComunas(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteComunas = function deleteComunas (req, res, next, id) {
  Comunas.deleteComunas(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editComunas = function editComunas (req, res, next, id) {
  Comunas.editComunas(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getComunaById = function getComunaById (req, res, next, id) {
  Comunas.getComunaById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getComunas = function getComunas (req, res, next) {
  Comunas.getComunas()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
