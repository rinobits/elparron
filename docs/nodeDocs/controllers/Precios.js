'use strict';

var utils = require('../utils/writer.js');
var Precios = require('../service/PreciosService');

module.exports.createPrecios = function createPrecios (req, res, next, body) {
  Precios.createPrecios(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePrecios = function deletePrecios (req, res, next, body, id) {
  Precios.deletePrecios(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editPrecios = function editPrecios (req, res, next, id) {
  Precios.editPrecios(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPrecioById = function getPrecioById (req, res, next, id) {
  Precios.getPrecioById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPrecios = function getPrecios (req, res, next) {
  Precios.getPrecios()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
