// packages
const boom                 = require('@hapi/boom');
const moment               = require('moment');
// imports & consts
const ProgramacionDiariaServices = require('./services');
const programacionDiariaServices = new ProgramacionDiariaServices();

const programacionDiariaFindAll = () => {
    return (req, res, next) => {
        programacionDiariaServices.programacionDiariaFindAll()
            .then(r => {
                programacionDiariaServices.sortTables(r)
                    .then(tables => {
                        res.json(tables);
                    })                
                    .catch(e => next(boom.badRequest(e)));
            })
            .catch(e => next(boom.badRequest(e)));
    }
}
const programacionDiariaFindByDiaYsucursal = () => {
    return (req, res, next) => {
        var { fecha, sucursal_id } = req.query;
        if(!moment(fecha, "DD-MM-YYYY").isValid()) reject('Invalid date');
        fecha = fecha.split('-');
        fecha = fecha[1] + '-' + fecha[0] + '-' + fecha[2];
        fecha = moment(fecha).format('e');
        programacionDiariaServices.programacionDiariaFindByDiaYsucursal(fecha, sucursal_id)
        .then(r  => { 
            if(r.length == 0){
                next(boom.badRequest('Sucursal o día inexistente'));
            }else{
                programacionDiariaServices.sortTables(r)
                .then(tables => {
                    if(!tables) next(boom.badRequest(e))
                    programacionDiariaServices.tablesToJson(tables)
                        .then(tables => res.json(tables));
                })
            }
        })
        .catch(e => next(boom.badRequest(e)))
    }
}
const programacionDiariaMultipleUpdate = () => {
    return (req, res, next) => {
        programacionDiariaServices.jsonToTables('update', req.body, req.query)
        .then(r => res.json({'TABLES UPDATED': true}))
        .catch(e => next(boom.badRequest(e)))
    }
}
const programacionDiariaEmptyOneDay = () => {
    return (req, res, next) => {
        req.query.dia = moment(req.query.dia).format('e');
        programacionDiariaServices.empty(req.query)
        .then(r => res.json({'OPERATION': 'SUCCESS'}))
        .catch(e => next(boom.badRequest(e)));
    }
}
const programacionDiariaEmptyWeek = () => {
    return (req, res, next) => {
        programacionDiariaServices.empty(req.query)
        .then(r => res.json({'OPERATION': 'SUCCESS'}))
        .catch(e => next(boom.badRequest(e)));
    }
}
const programacionDiariaMultipleCreate = () => { 
    return (req, res, next) => { 
        programacionDiariaServices.jsonToTables('create', req.body, req.query)
        .then(r => res.json({'TABLES CREATED': true}))
        .catch(e => next(boom.badRequest(e)))
    } 
} 
module.exports = {
    programacionDiariaFindByDiaYsucursal,
    programacionDiariaFindAll,
    programacionDiariaMultipleUpdate,
    programacionDiariaMultipleCreate,
    programacionDiariaEmptyOneDay,
    programacionDiariaEmptyWeek,
}