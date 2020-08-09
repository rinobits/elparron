'use strict';


/**
 * Crear seccion
 * Se requieren privilegios.
 *
 * body Seccion  (optional)
 * returns createTrue
 **/
exports.createSecciones = function(body) {
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
 * Eliminar seccion
 * Se requieren privilegios. 0 para eliminar 1 y para recuperar
 *
 * body DeleteSchema  (optional)
 * id Long Seccion ID
 * returns inline_response_200
 **/
exports.deleteSecciones = function(body,id) {
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
 * body Seccion  (optional)
 * id Long Seccion ID
 * returns modifyTrue
 **/
exports.editSecciones = function(body,id) {
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
 * Buscar seccion por su id.
 * Se requieren privilegos
 *
 * id Long seccion ID
 * returns getSeccion
 **/
exports.getSeccionById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "estado" : 1,
  "id" : 5,
  "nombre" : "seccion1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Listar seccion
 * Se requieren privilegos.
 *
 * returns getSecciones
 **/
exports.getSecciones = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 5,
  "nombre" : "seccion1",
  "estado" : 1
}, {
  "id" : 3,
  "nombre" : "seccion2",
  "estado" : 1
}, {
  "id" : 2,
  "nombre" : "seccion3",
  "estado" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

