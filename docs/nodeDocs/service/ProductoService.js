'use strict';


/**
 * Crear producto
 * Se requieren privilegios. 
 *
 * body Productos  (optional)
 * returns createTrue
 **/
exports.createProductos = function(body) {
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
 * Eliminar productos
 * Se requieren privilegios. 0 para eliminar y 1 para recuperar
 *
 * body DeleteSchema  (optional)
 * id Long Producto ID
 * returns deleteTrue
 **/
exports.deleteProductos = function(body,id) {
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
 * id Long Producto ID
 * returns modifyTrue
 **/
exports.editProductos = function(id) {
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
 * Buscar producto por su id.
 * Se requieren privilegos
 *
 * id Long producto ID
 * returns getProducto
 **/
exports.getProductoById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "productoTipo_nombre" : "Empanada",
  "estado" : 1,
  "productoTipo_id" : 1,
  "id" : 2,
  "diet" : 0,
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
 * Listar producto
 * Se requieren privilegos.
 *
 * returns getProductos
 **/
exports.getProductos = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1,
  "productoTipo_id" : 1,
  "productoTipo_nombre" : "Empanada",
  "diet" : 1,
  "nombre" : "Bizcocho vainilla chocolate",
  "cuadrada" : 1,
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 2,
  "productoTipo_id" : 1,
  "productoTipo_nombre" : "Empanada",
  "diet" : 1,
  "nombre" : "Bizcocho vainilla chocolate",
  "cuadrada" : 1,
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 2,
  "productoTipo_id" : 1,
  "productoTipo_nombre" : "Empanada",
  "diet" : 1,
  "nombre" : "Bizcocho vainilla chocolate",
  "cuadrada" : 1,
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

