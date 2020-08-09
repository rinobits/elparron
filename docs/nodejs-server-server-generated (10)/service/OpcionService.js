'use strict';


/**
 * Crear opcion
 * Se requieren privilegios.
 *
 * body Opcion  (optional)
 * returns createTrue
 **/
exports.createOpciones = function(body) {
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
 * Eliminar opcion
 * Se requieren privilegios. 0 para eliminar 1 y para recuperar
 *
 * body DeleteSchema  (optional)
 * id Long Opcion ID
 * returns inline_response_200
 **/
exports.deleteOpciones = function(body,id) {
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
 * body Opcion  (optional)
 * id Long Opcion ID
 * returns modifyTrue
 **/
exports.editOpciones = function(body,id) {
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
 * Buscar opcion por su id.
 * Se requieren privilegos
 *
 * id Long opcion ID
 * returns getOpcion
 **/
exports.getOpcionById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "icono" : "MKFemk4kwfmfd",
  "estado" : 1,
  "seccion_id" : 1,
  "perfil_nombre" : "profile name",
  "opcion_nombre" : "opcion1",
  "perfil_id" : 1,
  "seccion_nombre" : "section name",
  "id" : 5
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Listar opcion
 * Se requieren privilegos.
 *
 * returns getOpciones
 **/
exports.getOpciones = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "opcion_id" : 5,
  "opcion_nombre" : "opcion1",
  "seccion_id" : 1,
  "seccion_nombre" : "sectionName",
  "perfil_id" : 1,
  "perfil_nombre" : "profileName",
  "icono" : 1,
  "estado" : 1
}, {
  "opcion_id" : 3,
  "opcion_nombre" : "opcion2",
  "seccion_id" : 1,
  "seccion_nombre" : "sectionName",
  "perfil_id" : 1,
  "perfil_nombre" : "profileName",
  "icono" : 1,
  "estado" : 1
}, {
  "opcion_id" : 2,
  "opcion_nombre" : "opcion3",
  "seccion_id" : 1,
  "seccion_nombre" : "sectionName",
  "perfil_id" : 1,
  "perfil_nombre" : "profileName",
  "icono" : 1,
  "estado" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

