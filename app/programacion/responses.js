// packages
const boom                 = require('@hapi/boom');
// imports & consts
const ProgramacionServices = require('./services');
const programacionServices = new ProgramacionServices();

const programacionFindByDiaYsucursal = () => {
    return (req, res, next) => {
        const { dia, sucursal_id } = req.query;
        programacionServices.programacionFindByDiaYsucursal(dia, sucursal_id)
        .then(r  => { 
            if(r.length == 0) next(boom.badRequest('Sucursal no existe'));
            programacionServices.sortTables(r)
            .then(response => {
                tables = [...response];
                programacionServices.tablesToJson(tables)
                .then(tables => res.json(tables));
            })
        })
        .catch(e => next(boom.badImplementation(e)))
    }
}
const programacionMultipleUpdate = () => {
    return (req, res, next) => {
        programacionServices.jsonToTables('update', req.body)
        .then(r => res.json({'TABLES UPDATED': true}))
        .catch(e => next(boom.badRequest(e)))
    }
}
const programacionEmptyOneDay = () => {
    return (req, res, next) => {
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
const programacionCreateSucursal = () => {
    return (req, res, next) => {
        programacionServices.createSucursal(req.body)
        .then(r => res.json({'OPERATION': 'SUCCESS'}))
        .catch(e => {
            next(boom.badRequest(e));
        });
    }
}
const programacionDeleteSucursal = () => {
    return (req, res, next) => {
        programacionServices.deleteSucursal(req.query)
        .then(r => res.json({'OPERATION': 'SUCCESS'}))
        .catch(e => next(boom.badRequest(e)));
    }
}
module.exports = {
    programacionFindByDiaYsucursal,
    programacionMultipleUpdate,
    programacionEmptyOneDay,
    programacionEmptyWeek,
    programacionCreateSucursal,
    programacionDeleteSucursal
};