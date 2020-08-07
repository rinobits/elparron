'use strict';


/**
 * Crear productoTipo
 * Se requieren privilegios.
 *
 * body ProductoTipos  (optional)
 * returns createTrue
 **/
exports.createProductoTipos = function(body) {
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
 * Eliminar productoTipos
 * Se requieren privilegios. 0 para eliminar y 1 para recuperar
 *
 * body DeleteSchema  (optional)
 * id Long ProductoTipo ID
 * returns deleteTrue
 **/
exports.deleteProductoTipos = function(body,id) {
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
 * id Long ProductoTipo ID
 * returns modifyTrue
 **/
exports.editProductoTipos = function(id) {
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
 * Buscar productoTipo por su id.
 * Se requieren privilegos
 *
 * id Long productoTipo ID
 * returns getProductoTipo
 **/
exports.getProductoTipoById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "estado" : 1,
  "id" : 2,
  "nombre" : "Empanada de pino",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Listar productoTipo
 * Se requieren privilegos.
 *
 * returns getProductoTipos
 **/
exports.getProductoTipos = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1,
  "nombre" : "Empanada",
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 2,
  "nombre" : "Empanada",
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 2,
  "nombre" : "Empanada",
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

