'use strict';

var utils = require('../utils/writer.js');
var Tortas = require('../service/TortasService');

module.exports.createTorta = function createTorta (req, res, next, body) {
  Tortas.createTorta(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTorta = function deleteTorta (req, res, next, body, id) {
  Tortas.deleteTorta(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editTorta = function editTorta (req, res, next, id) {
  Tortas.editTorta(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTortas = function getTortas (req, res, next) {
  Tortas.getTortas()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTortasById = function getTortasById (req, res, next, id) {
  Tortas.getTortasById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
