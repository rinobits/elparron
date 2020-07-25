// packages
const boom                 = require('@hapi/boom');
const moment               = require('moment');
// imports & consts
const ProgramacionServices = require('./services');
const programacionServices = new ProgramacionServices();

const programacionFindAll = () => {
    return (req, res, next) => {
        programacionServices.programacionFindAll()
            .then(r => res.json(r))
            .catch(e => next(boom.badRequest(e)));
    }
}
const programacionFindByDiaYsucursal = () => {
    return (req, res, next) => {
        var { fecha, sucursal_id } = req.query;
        fecha = moment(fecha).format('e');
        programacionServices.programacionFindByDiaYsucursal(fecha, sucursal_id)
        .then(r  => { 
            if(r.length == 0){
                next(boom.badRequest('Sucursal o día inexistente'));
            }else{
                programacionServices.sortTables(r)
                .then(tables => {
                    if(!tables) next(boom.badImplementation(e))
                    programacionServices.tablesToJson(tables)
                    .then(tables => res.json(tables));
                })
            }
        })
        .catch(e => next(boom.badImplementation(e)))
    }
}
const programacionMultipleUpdate = () => {
    return (req, res, next) => {
        programacionServices.jsonToTables('update', req.body, req.query)
        .then(r => res.json({'TABLES UPDATED': true}))
        .catch(e => next(boom.badRequest(e)))
    }
}
const programacionEmptyOneDay = () => {
    return (req, res, next) => {
        req.query.dia = moment(req.query.dia).format('e');
        programacionServices.empty(req.query)
        .then(r => res.json({'OPERATION': 'SUCCESS'}))
        .catch(e => next(boom.badRequest(e)));
    }
}
const programacionEmptyWeek = () => {
    return (req, res, next) => {
        programacionServices.empty(req.query)
        .then(r => res.json({'OPERATION': 'SUCCESS'}))
        .catch(e => next(boom.badRequest(e)));
    }
}
const programacionMultipleCreate = () => { 
    return (req, res, next) => { 
        programacionServices.jsonToTables('create', req.body, req.query)
        .then(r => res.json({'TABLES CREATED': true}))
        .catch(e => next(boom.badRequest(e)))
    } 
} 
const programacionDeleteSucursal = () => {
    return (req, res, next) => {
        programacionServices.deleteSucursal(req.query)
        .then(r => {
            console.log('<SUCURSAL> SUCCESSFULLY DELETED');
        })
        .catch(e => next(boom.badRequest(e)));
    }
}
module.exports = {
    programacionFindByDiaYsucursal,
    programacionFindAll,
    programacionMultipleUpdate,
    programacionMultipleCreate,
    programacionEmptyOneDay,
    programacionEmptyWeek,
    programacionDeleteSucursal
}