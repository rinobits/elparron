'use strict';


/**
 * Crear empleado
 * Se requieren privilegios.
 *
 * body Empleados  (optional)
 * returns createTrue
 **/
exports.createEmpleado = function(body) {
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
 * Eliminar empleado
 * Se requieren privilegios.
 *
 * id Long Empleado ID
 * returns deleteTrue
 **/
exports.deleteEmpleado = function(id) {
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
 * id Long Empleado ID
 * returns modifyTrue
 **/
exports.editEmpleado = function(id) {
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
 * Buscar empleado por su id.
 * Se requieren privilegos.
 *
 * id Long Empleados ID
 * returns getEmpleado
 **/
exports.getEmpleadoById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "rut" : "18.562.123-4",
  "apellidoPaterno" : "Ramirez",
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "estado" : 1,
  "cargo_id" : 2,
  "id" : 5,
  "email" : "jc.webservicdes@agilesolutions.com",
  "nombres" : "Juan Carlos",
  "apellidoMaterno" : "Sánchez",
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
 * Listar empleados
 * Se requieren privilegos.
 *
 * returns getEmpleados
 **/
exports.getEmpleados = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 5,
  "rut" : "12.123.123-7",
  "nombres" : "Jean ",
  "apellidoPaterno" : "Rodriguez",
  "apellidoMaterno" : "Paul",
  "cargo_id" : 1,
  "email" : "ppaulpaul@gmail.com",
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 5,
  "rut" : "12.123.123-7",
  "nombres" : "Jean ",
  "apellidoPaterno" : "Rodriguez",
  "apellidoMaterno" : "Paul",
  "cargo_id" : 1,
  "email" : "ppaulpaul@gmail.com",
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 5,
  "rut" : "12.123.123-7",
  "nombres" : "Jean ",
  "apellidoPaterno" : "Rodriguez",
  "apellidoMaterno" : "Paul",
  "cargo_id" : 1,
  "email" : "ppaulpaul@gmail.com",
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 5,
  "rut" : "12.123.123-7",
  "nombres" : "Jean ",
  "apellidoPaterno" : "Rodriguez",
  "apellidoMaterno" : "Paul",
  "cargo_id" : 1,
  "email" : "ppaulpaul@gmail.com",
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

