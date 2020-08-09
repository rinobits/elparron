'use strict';

var utils = require('../utils/writer.js');
var Torta = require('../service/TortaService');

module.exports.createTorta = function createTorta (req, res, next, body) {
  Torta.createTorta(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTorta = function deleteTorta (req, res, next, body, id) {
  Torta.deleteTorta(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editTorta = function editTorta (req, res, next, body, id) {
  Torta.editTorta(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTortas = function getTortas (req, res, next) {
  Torta.getTortas()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTortasById = function getTortasById (req, res, next, id) {
  Torta.getTortasById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
