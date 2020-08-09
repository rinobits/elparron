// packages
const boom                 = require('@hapi/boom');
const moment               = require('moment');
// imports & consts
const SobranteServices = require('./services');
const sobranteServices = new SobranteServices();

const sobranteFindByDiaYsucursal = () => {
    return (req, res, next) => {
        var { fecha, sucursal_id } = req.query;
        if(!moment(fecha, "DD-MM-YYYY").isValid()) reject('Invalid date');
        fecha = fecha.split('-');
        fecha = fecha[1] + '-' + fecha[0] + '-' + fecha[2];
        fecha = moment(fecha).format('e');
        sobranteServices.sobranteFindByDiaYsucursal(fecha, sucursal_id)
        .then(r  => { 
            if(r.length == 0){ 
                next(boom.badRequest('Sucursal o día inexistente')); 
            }else{ 
                sobranteServices.tablesToJson(r) 
                .then(json => { 
                    json.dia = fecha; 
                    res.json(json); 
                })
            }
        })
        .catch(e => next(boom.badRequest(e)))
    }
}
const sobranteMultipleUpdate = () => {
    return (req, res, next) => {
        sobranteServices.jsonToTables('update', req.body, req.query)
        .then(r => res.json({'TABLES UPDATED': true}))
        .catch(e => next(boom.badRequest(e)))
    }
}
const sobranteMultipleCreate = () => {
    return (req, res, next) => {
        sobranteServices.jsonToTables('create', req.body, req.query)
        .then(r => res.json({'TABLES CREATED': true}))
        .catch(e => next(boom.badRequest(e)))
    }
}
module.exports = {
    sobranteFindByDiaYsucursal,
    sobranteMultipleUpdate,
    sobranteMultipleCreate
};