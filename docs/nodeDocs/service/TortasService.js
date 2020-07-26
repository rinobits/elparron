'use strict';


/**
 * Crear torta
 * Se requieren privilegios.
 *
 * body Tortas  (optional)
 * returns createTrue
 **/
exports.createTorta = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "CREATED" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Eliminar torta
 * Se requieren privilegios.
 *
 * id Long Torta ID
 * returns deleteTrue
 **/
exports.deleteTorta = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "DELETE DATA" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Editar información
 * Se requieren privilegios.
 *
 * id Long Torta ID
 * returns modifyTrue
 **/
exports.editTorta = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "MODIFY DATA" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Listar tortas
 * Se requieren privilegos.
 *
 * returns getTortas
 **/
exports.getTortas = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 5,
  "masaTipo_id" : 2,
  "masaSabor_id" : 2,
  "sabor_id" : 2,
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 3,
  "masaTipo_id" : 2,
  "masaSabor_id" : 2,
  "sabor_id" : 2,
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 2,
  "masaTipo_id" : 2,
  "masaSabor_id" : 2,
  "sabor_id" : 2,
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 10,
  "masaTipo_id" : 2,
  "masaSabor_id" : 2
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Buscar tortas por su id.
 * Se requieren privilegos.
 *
 * id Long torta ID
 * returns getTorta
 **/
exports.getTortasById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "estado" : 1,
  "masaSabor_id" : 1,
  "id" : 5,
  "sabor_id" : 1,
  "masaTipo_id" : 1,
  "updatedAt" : "2020-06-16T23:05:14.000Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

