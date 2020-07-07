'use strict';

var utils = require('../utils/writer.js');
var MasaSabor = require('../service/MasaSaborService');

module.exports.createMasaSabor = function createMasaSabor (req, res, next, body) {
  MasaSabor.createMasaSabor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteMasaSabor = function deleteMasaSabor (req, res, next, id) {
  MasaSabor.deleteMasaSabor(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editMasaSabor = function editMasaSabor (req, res, next, id) {
  MasaSabor.editMasaSabor(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMasaSabor = function getMasaSabor (req, res, next) {
  MasaSabor.getMasaSabor()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMasaSaborById = function getMasaSaborById (req, res, next, id) {
  MasaSabor.getMasaSaborById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
