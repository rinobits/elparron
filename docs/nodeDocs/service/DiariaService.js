'use strict';


/**
 * Crear programación diaria
 * Se requieren privilegios.
 *
 * body JsonData  (optional)
 * fecha String fecha de solicitud \"DD-MM-YYYY\" (optional)
 * sucursal_id Integer id de la sucursal (optional)
 * returns createTrue
 **/
exports.createDiarias = function(body,fecha,sucursal_id) {
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
 * Vaciar día
 * Se requieren privilegios.
 *
 * fecha String fecha de solicitud \"DD-MM-YYYY\" (optional)
 * sucursal_id Integer id de la sucursal (optional)
 * returns emptyTrue
 **/
exports.deleteDiarias = function(fecha,sucursal_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "OPERATION" : "SUCCESS"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Vaciar semana correspondiente a una sucursal
 * Se requieren privilegios.
 *
 * sucursal_id Integer id de la sucursal (optional)
 * returns emptyTrue
 **/
exports.deleteWeek = function(sucursal_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "OPERATION" : "SUCCESS"
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
exports.editDiarias = function(body,fecha,sucursal_id) {
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
 * Buscar dia por fecha e id de la sucursal. Devuelve Json con 13 tortas y sus cantidades.
 * Se requieren privilegos
 *
 * fecha String fecha de solicitud \"DD-MM-YYYY\" (optional)
 * sucursal_id Integer id de la sucursal (optional)
 * returns getJsonData
 **/
exports.getDiariaById = function(fecha,sucursal_id) {
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


/**
 * Listar todo
 * Se requieren privilegos.
 *
 * returns getDiasListAll
 **/
exports.getDiarias = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

