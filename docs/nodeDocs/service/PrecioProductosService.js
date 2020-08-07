'use strict';


/**
 * Crear precioProducto
 * Se requieren privilegios. Crea uno o varios productos
 *
 * body List  (optional)
 * returns createTrue
 **/
exports.createprecioProducto = function(body) {
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
 * Editar información de uno o varios productos
 * Se requieren privilegios. 
 *
 * returns modifyTrue
 **/
exports.editprecioProductos = function() {
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
 * Listar precioProducto por sucursal
 * Se requieren privilegos.
 *
 * sucursal_id Integer id de la sucursal, vgr: /?sucursal_id=1 (optional)
 * returns getprecioProductos
 **/
exports.getprecioProductos = function(sucursal_id) {
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

