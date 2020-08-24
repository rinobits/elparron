// packages
const boom                 = require('@hapi/boom');
const moment               = require('moment');
// imports & consts
const ProgramacionSemanalServices = require('./services');
const programacionSemanalServices = new ProgramacionSemanalServices();

const programacionSemanalFindAll = () => {
    return (req, res, next) => {
        programacionSemanalServices.programacionSemanalFindAll()
            .then(r => {
                programacionSemanalServices.sortTables(r)
                    .then(tables => {
                        res.json(tables);
                    })                
                    .catch(e => next(boom.badImplementation(e)));
            })
            .catch(e => next(boom.badImplementation(e)));
    }
}
const programacionSemanalFindByDiaYsucursal = () => {
    return (req, res, next) => {
        var { dia, sucursal_id } = req.query;
        programacionSemanalServices.programacionSemanalFindByDiaYsucursal(dia, sucursal_id)
        .then(r  => { 
            if(r.length == 0){
                next(boom.badRequest('Sucursal o día inexistente'));
            }else{
                programacionSemanalServices.sortTables(r)
                .then(tables => {
                    if(!tables) next(boom.badRequest(e))
                    programacionSemanalServices.tablesToJson(tables)
                    .then(tables => res.json(tables));
                })
            }
        })
        .catch(e => next(boom.badRequest(e)))
    }
}
const programacionSemanalMultipleUpdate = () => {
    return (req, res, next) => {
        programacionSemanalServices.jsonToTables('update', req.body, req.query)
        .then(r => res.json({'TABLES UPDATED': true}))
        .catch(e => next(boom.badRequest(e)))
    }
}
const programacionSemanalMultipleCreate = () => { 
    return (req, res, next) => { 
        programacionSemanalServices.jsonToTables('create', req.body, req.query)
        .then(r => res.json({'TABLES CREATED': true}))
        .catch(e => next(boom.badRequest(e)))
    } 
} 
module.exports = {
    programacionSemanalFindAll,
    programacionSemanalFindByDiaYsucursal,
    programacionSemanalMultipleUpdate,
    programacionSemanalMultipleCreate
}