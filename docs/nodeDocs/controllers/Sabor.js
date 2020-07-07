'use strict';

var utils = require('../utils/writer.js');
var Sabor = require('../service/SaborService');

module.exports.createSabor = function createSabor (req, res, next, body) {
  Sabor.createSabor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSabor = function deleteSabor (req, res, next, id) {
  Sabor.deleteSabor(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editSabor = function editSabor (req, res, next, id) {
  Sabor.editSabor(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSabor = function getSabor (req, res, next) {
  Sabor.getSabor()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSaborById = function getSaborById (req, res, next, id) {
  Sabor.getSaborById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
