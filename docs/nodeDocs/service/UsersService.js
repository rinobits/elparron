'use strict';


/**
 * Crear usuario
 * Se requieren privilegios.
 *
 * body Users  (optional)
 * returns createTrue
 **/
exports.createUser = function(body) {
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
 * Eliminar usuario
 * Se requieren privilegios.
 *
 * id Long Order ID
 * returns deleteTrue
 **/
exports.deleteUser = function(id) {
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
 * id Long Users ID
 * returns modifyTrue
 **/
exports.editUser = function(id) {
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
 * Buscar usuario por su id.
 * Se requieren privilegos.
 *
 * id Long Users ID
 * returns getUser
 **/
exports.getUserById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2020-06-15T21:33:42.000Z",
  "id" : 1,
  "userName" : "Arath",
  "updatedAt" : "2020-06-15T21:33:42.000Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Listar usuarios
 * Se requieren privilegos.
 *
 * returns getUsers
 **/
exports.getUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "userName" : "User",
  "createdAt" : "2020-06-16T23:05:14.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 3,
  "userName" : "User",
  "createdAt" : "2020-06-16T23:05:14.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 17,
  "userName" : "User",
  "createdAt" : "2020-06-16T23:05:14.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 21,
  "userName" : "User",
  "createdAt" : "2020-06-16T23:05:14.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

