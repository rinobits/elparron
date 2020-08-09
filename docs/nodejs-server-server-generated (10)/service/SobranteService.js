'use strict';


/**
 * Crear sobrante
 * Se requieren privilegios.
 *
 * body JsonData  (optional)
 * fecha String fecha de solicitud \"DD-MM-YYYY\" (optional)
 * sucursal_id Integer id de la sucursal (optional)
 * returns createTrue
 **/
exports.createSobrantes = function(body,fecha,sucursal_id) {
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
 * Editar información
 * Se requieren privilegios.
 *
 * body JsonData  (optional)
 * fecha String fecha de solicitud \"DD-MM-YYYY\" (optional)
 * sucursal_id Integer id de la sucursal (optional)
 * returns modifyTrue
 **/
exports.editSobrantes = function(body,fecha,sucursal_id) {
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
 * Buscar dia por fecha e id de la sucursal.
 * Se requieren privilegos
 *
 * fecha String fecha de solicitud \"DD-MM-YYYY\" (optional)
 * sucursal_id Integer id de la sucursal (optional)
 * returns getJsonData
 **/
exports.getSobranteById = function(fecha,sucursal_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "sucursal_id" : 1,
  "createdAt" : "2020-07-25 17:14:27",
  "id" : 5,
  "dia" : 3,
  "detalle" : [ "", "" ],
  "updatedAt" : "2020-07-25 17:14:27"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

