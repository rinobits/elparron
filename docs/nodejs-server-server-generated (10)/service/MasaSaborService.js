'use strict';


/**
 * Crear sabor de masa
 * Se requieren privilegios.
 *
 * body MasaSabor  (optional)
 * returns createTrue
 **/
exports.createMasaSabor = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "response" : "created/updated sucessfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Eliminar sabor de masa
 * Se requieren privilegios.  0 para eliminar y 1 para recuperar
 *
 * body DeleteSchema  (optional)
 * id Long MasaSabor ID
 * returns inline_response_200
 **/
exports.deleteMasaSabor = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
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
 * body MasaSabor  (optional)
 * id Long MasaSabor ID
 * returns modifyTrue
 **/
exports.editMasaSabor = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "restore" : "created/updated sucessfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Listar sabor de masa
 * Se requieren privilegos.
 *
 * returns getMasaSabors
 **/
exports.getMasaSabor = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 5,
  "nombre" : "nuez",
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 3,
  "nombre" : "chocolate",
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 2,
  "nombre" : "vainilla",
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Buscar sabor de masa por su id.
 * Se requieren privilegos.
 *
 * id Long masaSabor ID
 * returns getMasaSabor
 **/
exports.getMasaSaborById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "estado" : 1,
  "id" : 5,
  "nombre" : "bizcocho",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

