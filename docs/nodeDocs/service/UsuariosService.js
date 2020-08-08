'use strict';


/**
 * Autenticación
 * Obtención de privilegios
 *
 * body Usuarios Usuario input (optional)
 * returns tokenResponse
 **/
exports.authenticate = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNTksMzYwNjE0LCJleHAiOjE1OTIzNjQyMTR9.20VU1mS7WO3j87QsG_K36JHBCSoFsflITLzbJ6XW-XU"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Crear usuario
 * Se requieren privilegios.
 *
 * body Usuarios  (optional)
 * returns createTrue
 **/
exports.createUser = function(body) {
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
 * Eliminar usuario
 * Se requieren privilegios.  0 para eliminar y 1 para recuperar
 *
 * body DeleteSchema  (optional)
 * id Long Order ID
 * returns inline_response_200
 **/
exports.deleteUser = function(body,id) {
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
 * body UsuarioEdit  (optional)
 * id Long Users ID
 * returns modifyTrue
 **/
exports.editUser = function(body,id) {
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
  "usuario_creadoEl" : "2020-08-07T23:04:42.000Z",
  "perfil_nombre" : "profileName",
  "perfil_id" : 1,
  "usuario_userName" : "Arath",
  "id" : 1
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
  "usuario_userName" : "User",
  "usuario_creadoEl" : "2020-06-16T23:05:14.000Z",
  "perfil_id" : 1,
  "perfil_nombre" : "proifleName"
}, {
  "id" : 3,
  "usuario_userName" : "User",
  "usuario_creadoEl" : "2020-06-16T23:05:14.000Z",
  "perfil_id" : 1,
  "perfil_nombre" : "proifleName"
}, {
  "id" : 17,
  "usuario_userName" : "User",
  "usuario_creadoEl" : "2020-06-16T23:05:14.000Z",
  "perfil_id" : 1,
  "perfil_nombre" : "proifleName"
}, {
  "id" : 21,
  "usuario_userName" : "User",
  "usuario_creadoEl" : "2020-06-16T23:05:14.000Z",
  "perfil_id" : 1,
  "perfil_nombre" : "proifleName"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

