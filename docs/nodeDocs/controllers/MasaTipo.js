'use strict';

var utils = require('../utils/writer.js');
var MasaTipo = require('../service/MasaTipoService');

module.exports.createMasaTipo = function createMasaTipo (req, res, next, body) {
  MasaTipo.createMasaTipo(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteMasaTipo = function deleteMasaTipo (req, res, next, id) {
  MasaTipo.deleteMasaTipo(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editMasaTipo = function editMasaTipo (req, res, next, id) {
  MasaTipo.editMasaTipo(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMasaTipo = function getMasaTipo (req, res, next) {
  MasaTipo.getMasaTipo()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMasaTipoById = function getMasaTipoById (req, res, next, id) {
  MasaTipo.getMasaTipoById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
