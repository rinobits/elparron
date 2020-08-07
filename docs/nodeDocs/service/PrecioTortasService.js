'use strict';


/**
 * Crear precioTorta
 * Se requieren privilegios. Crea una o varias tortas.
 *
 * body List  (optional)
 * returns createTrue
 **/
exports.createprecioTorta = function(body) {
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
 * Editar información
 * Se requieren privilegios. Edita una o varias tortas
 *
 * returns modifyTrue
 **/
exports.editprecioTortas = function() {
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
 * Listar precioTorta
 * Se requieren privilegos.
 *
 * sucursal_id Integer id de la sucursal, vgr: /?sucursal_id=1 (optional)
 * returns getprecioTortas
 **/
exports.getprecioTortas = function(sucursal_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ [ "", "" ], [ "", "" ] ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

