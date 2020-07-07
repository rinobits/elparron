'use strict';


/**
 * Crear pedido
 * Se requieren privilegios.
 *
 * body Pedidos  (optional)
 * returns createTrue
 **/
exports.createPedido = function(body) {
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
 * Eliminar pedido
 * Se requieren privilegios.
 *
 * id Long Pedido ID
 * returns deleteTrue
 **/
exports.deletePedido = function(id) {
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
 * id Long Pedido ID
 * returns modifyTrue
 **/
exports.editPedido = function(id) {
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
 * Listar pedidos
 * No se requieren privilegos.
 *
 * returns getPedidos
 **/
exports.getPedidos = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 5,
  "name" : "QA",
  "phone" : "9723123",
  "torta_id" : 3,
  "tamano_id" : 2,
  "descripcion" : "dadada dadada daadada",
  "message" : "asdasdas dasdasd asdsa",
  "value" : 42000,
  "deposit" : 12000,
  "horaEntrega" : "10:30",
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 3,
  "name" : "QA",
  "phone" : "9723123",
  "torta_id" : 3,
  "tamano_id" : 2,
  "descripcion" : "dadada dadada daadada",
  "message" : "asdasdas dasdasd asdsa",
  "value" : 42000,
  "deposit" : 12000,
  "horaEntrega" : "10:30",
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 2,
  "name" : "QA",
  "phone" : "9723123",
  "torta_id" : 3,
  "tamano_id" : 2,
  "descripcion" : "dadada dadada daadada",
  "message" : "asdasdas dasdasd asdsa",
  "value" : 42000,
  "deposit" : 12000,
  "horaEntrega" : "10:30",
  "estado" : 1,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 10,
  "name" : "QA",
  "phone" : "9723123",
  "torta_id" : 3,
  "tamano_id" : 2,
  "descripcion" : "dadada dadada daadada",
  "message" : "asdasdas dasdasd asdsa",
  "value" : 42000,
  "deposit" : 12000,
  "horaEntrega" : "10:30",
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


/**
 * Buscar pedidos por su id.
 * No se requieren privilegos.
 *
 * id Long pedido ID
 * returns getPedido
 **/
exports.getPedidosById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "descripcion" : "dadada dadada daadada",
  "torta_id" : 3,
  "estado" : 1,
  "horaEntrega" : "10:30",
  "imagen" : "imagen",
  "message" : "asdasdas dasdasd asdsa",
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "phone" : "9723123",
  "name" : "QA",
  "deposit" : 12000,
  "id" : 5,
  "tamano_id" : 2,
  "value" : 42000,
  "updatedAt" : "2020-06-16T23:05:14.000Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

