'use strict';


/**
 * Crear precios para tortas ó productos
 * Se requieren privilegios. Crea uno o varios productos/tortas
 *
 * body Body_1  (optional)
 * returns createTrue
 **/
exports.createprecioProducto = function(body) {
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
 * Editar información de uno o varios productos/tortas
 * Se requieren privilegios. Envia productos ó tortas
 *
 * body Body  (optional)
 * returns modifyTrue
 **/
exports.editprecio = function(body) {
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
 * Listar precios por sucursal
 * Se requieren privilegos.
 *
 * sucursal_id Integer id de la sucursal, vgr: /?sucursal_id=1 (optional)
 * returns getprecioProductos
 **/
exports.getprecio = function(sucursal_id) {
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

