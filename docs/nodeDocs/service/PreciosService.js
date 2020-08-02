'use strict';


/**
 * Crear precio
 * Se requieren privilegios. 0 para eliminar y 1 para recuperar
 *
 * body Precios  (optional)
 * returns createTrue
 **/
exports.createPrecios = function(body) {
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
 * Eliminar precios
 * Se requieren privilegios. 0 para eliminar y 1 para recuperar
 *
 * body DeleteSchema  (optional)
 * id Long Precio ID
 * returns deleteTrue
 **/
exports.deletePrecios = function(body,id) {
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
 * Se requieren privilegios. 0 para eliminar y 1 para recuperar
 *
 * id Long Precio ID
 * returns modifyTrue
 **/
exports.editPrecios = function(id) {
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
 * Buscar precio por su id.
 * Se requieren privilegos
 *
 * id Long precio ID
 * returns getPrecio
 **/
exports.getPrecioById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "sucursal_id" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "venta" : 5000,
  "estado" : 1,
  "costo" : 10000,
  "cuadrada" : 1,
  "producto_id" : 1,
  "id" : 2,
  "tamano_id" : 1,
  "diet" : 0,
  "masaTipo_id" : 2,
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
 * Listar precio
 * Se requieren privilegos.
 *
 * returns getPrecios
 **/
exports.getPrecios = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1,
  "producto_id" : 1,
  "tamano_id" : 1,
  "masaTipo_id" : 1,
  "diet" : 1,
  "cuadrada" : 0,
  "costo" : 7000,
  "venta" : 10000,
  "sucursal_id" : 1,
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 2,
  "producto_id" : 1,
  "tamano_id" : 1,
  "masaTipo_id" : 1,
  "diet" : 1,
  "cuadrada" : 0,
  "costo" : 7000,
  "venta" : 10000,
  "sucursal_id" : 1,
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 2,
  "producto_id" : 1,
  "tamano_id" : 1,
  "masaTipo_id" : 1,
  "diet" : 1,
  "cuadrada" : 0,
  "costo" : 7000,
  "venta" : 10000,
  "sucursal_id" : 1,
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

