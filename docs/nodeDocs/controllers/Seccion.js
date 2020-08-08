'use strict';

var utils = require('../utils/writer.js');
var Seccion = require('../service/SeccionService');

module.exports.createSecciones = function createSecciones (req, res, next, body) {
  Seccion.createSecciones(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSecciones = function deleteSecciones (req, res, next, body, id) {
  Seccion.deleteSecciones(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editSecciones = function editSecciones (req, res, next, body, id) {
  Seccion.editSecciones(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSeccionById = function getSeccionById (req, res, next, id) {
  Seccion.getSeccionById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSecciones = function getSecciones (req, res, next) {
  Seccion.getSecciones()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
