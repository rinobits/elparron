'use strict';


/**
 * Crear sucursal
 * Se requieren privilegios.
 *
 * body Sucursales  (optional)
 * returns createTrue
 **/
exports.createSucursales = function(body) {
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
 * Eliminar sucursales
 * Se requieren privilegios.
 *
 * id Long Sucursal ID
 * returns deleteTrue
 **/
exports.deleteSucursales = function(id) {
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
 * id Long Sucursal ID
 * returns modifyTrue
 **/
exports.editSucursales = function(id) {
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
 * Buscar sucursal por su id.
 * Se requieren privilegos
 *
 * id Long sucursal ID
 * returns getSucursal
 **/
exports.getSucursalById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contactoNombre" : "Django",
  "estado" : 1,
  "direccion" : "Pudahuel xyz 123",
  "colorLetra" : "rosa",
  "nombre" : "Sucursal Pudahuel",
  "giro" : "servicios",
  "rut" : "1.231.232-2",
  "comuna_id" : 1,
  "contactoEmail" : "pudahuel@elparron.cl",
  "colorFondo" : "negro",
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "razonSocial" : "Parron Pudahuel LTDA",
  "id" : 5,
  "updatedAt" : "2020-06-16T23:05:14.000Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Listar sucursales
 * Se requieren privilegos.
 *
 * returns getSucursales
 **/
exports.getSucursales = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1,
  "rut" : "2221234-1",
  "razonSocial" : "Pudahuel El parroon ltda",
  "giro" : "servicios",
  "direccion" : "pudahuel xyz 123",
  "comuna_id" : "2",
  "nombre" : "pudahuel el parron",
  "contactoEmail" : "pudahuel@elparron.cl",
  "contactoNombre" : "Marta",
  "colorFondo" : "blanco",
  "colorLetra" : "rojo",
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 2,
  "rut" : "2221234-1",
  "razonSocial" : "Pudahuel El parroon ltda",
  "giro" : "servicios",
  "direccion" : "pudahuel xyz 123",
  "comuna_id" : "2",
  "nombre" : "pudahuel el parron",
  "contactoEmail" : "pudahuel@elparron.cl",
  "contactoNombre" : "Marta",
  "colorFondo" : "blanco",
  "colorLetra" : "rojo",
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

