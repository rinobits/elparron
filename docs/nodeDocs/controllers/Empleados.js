'use strict';

var utils = require('../utils/writer.js');
var Empleados = require('../service/EmpleadosService');

module.exports.createEmpleado = function createEmpleado (req, res, next, body) {
  Empleados.createEmpleado(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteEmpleado = function deleteEmpleado (req, res, next, id) {
  Empleados.deleteEmpleado(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editEmpleado = function editEmpleado (req, res, next, id) {
  Empleados.editEmpleado(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEmpleadoById = function getEmpleadoById (req, res, next, id) {
  Empleados.getEmpleadoById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEmpleados = function getEmpleados (req, res, next) {
  Empleados.getEmpleados()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
