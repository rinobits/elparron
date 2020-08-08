'use strict';

var utils = require('../utils/writer.js');
var Tamano = require('../service/TamanoService');

module.exports.createTamano = function createTamano (req, res, next, body) {
  Tamano.createTamano(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTamano = function deleteTamano (req, res, next, body, id) {
  Tamano.deleteTamano(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editTamano = function editTamano (req, res, next, body, id) {
  Tamano.editTamano(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTamano = function getTamano (req, res, next) {
  Tamano.getTamano()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTamanoById = function getTamanoById (req, res, next, id) {
  Tamano.getTamanoById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
