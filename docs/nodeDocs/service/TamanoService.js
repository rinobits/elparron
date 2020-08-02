'use strict';


/**
 * Crear tamaño
 * Se requieren privilegios.
 *
 * body Tamano  (optional)
 * returns createTrue
 **/
exports.createTamano = function(body) {
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
 * Eliminar tamano
 * Se requieren privilegios. 0 para eliminar y 1 para recuperar
 *
 * body DeleteSchema  (optional)
 * id Long Tamano ID
 * returns deleteTrue
 **/
exports.deleteTamano = function(body,id) {
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
 * id Long Tamano ID
 * returns modifyTrue
 **/
exports.editTamano = function(id) {
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
 * Listar tamaño
 * Se requieren privilegos.
 *
 * returns getTamanos
 **/
exports.getTamano = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1,
  "tamano" : "1/2",
  "personas" : "6",
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 2,
  "tamano" : "1",
  "personas" : "12",
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 3,
  "tamano" : "2",
  "personas" : "18",
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 4,
  "tamano" : "3",
  "personas" : "24",
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
 * Buscar tamaño por su id.
 * Se requieren privilegos
 *
 * id Long tamano ID
 * returns getTamano
 **/
exports.getTamanoById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "estado" : 1,
  "id" : 5,
  "personas" : "6 personas",
  "tamano" : "1/2",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

