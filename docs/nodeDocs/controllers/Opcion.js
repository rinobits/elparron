'use strict';

var utils = require('../utils/writer.js');
var Opcion = require('../service/OpcionService');

module.exports.createOpciones = function createOpciones (req, res, next, body) {
  Opcion.createOpciones(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteOpciones = function deleteOpciones (req, res, next, body, id) {
  Opcion.deleteOpciones(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editOpciones = function editOpciones (req, res, next, body, id) {
  Opcion.editOpciones(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOpcionById = function getOpcionById (req, res, next, id) {
  Opcion.getOpcionById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOpciones = function getOpciones (req, res, next) {
  Opcion.getOpciones()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
