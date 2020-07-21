// packages
const boom                 = require('@hapi/boom');
const moment               = require('moment');

// imports & consts
const SobranteServices = require('./services');
const sobranteServices = new SobranteServices();

const sobranteFindByDiaYsucursal = () => {
    return (req, res, next) => {
        var { dia, sucursal_id } = req.query;
        dia = moment(dia).format('e');
        sobranteServices.sobranteFindByDiaYsucursal(dia, sucursal_id)
        .then(r  => { 
            if(r.length == 0){
                next(boom.badRequest('Sucursal o día inexistente'));
            }else{
                sobranteServices.sortTables(r)
                .then(tables => {
                    if(!tables) next(boom.badImplementation(e))
                    sobranteServices.tablesToJson(tables)
                    .then(tables => {
                        tables.dia = dia;
                        res.json(tables);
                    })
                })
            }
        })
        .catch(e => next(boom.badImplementation(e)))
    }
}
const sobranteMultipleUpdate = () => {
    return (req, res, next) => {
        req.body.dia = moment(req.body.dia).format('e');
        sobranteServices.jsonToTables('update', req.body)
        .then(r => res.json({'TABLES UPDATED': true}))
        .catch(e => next(boom.badRequest(e)))
    }
}
const sobranteEmptyOneDay = () => {
    return (req, res, next) => {
        req.query.dia = moment(req.query.dia).format('e');
        sobranteServices.empty(req.query)
        .then( r => res.json({'OPERATION': 'SUCCESS'}))
        .catch(e => next(boom.badRequest(e)));
    }
}
const sobranteEmptyWeek = () => {
    return (req, res, next) => {
        sobranteServices.empty(req.query)
        .then( r => res.json({'OPERATION': 'SUCCESS'}))
        .catch(e => next(boom.badRequest(e)));
    }
}
module.exports = {
    sobranteFindByDiaYsucursal,
    sobranteMultipleUpdate,
    sobranteEmptyOneDay,
    sobranteEmptyWeek
};