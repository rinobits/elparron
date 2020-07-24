// packages
const boom                 = require('@hapi/boom');
const moment               = require('moment');
// imports & consts
const ProgramacionServices = require('./services');
const SobranteServices     = require('../sobrante/services');
const programacionServices = new ProgramacionServices();
const sobranteServices     = new SobranteServices();

const programacionFindByDiaYsucursal = () => {
    return (req, res, next) => {
        var { dia, sucursal_id } = req.query;
        dia = moment(dia).format('e');
        programacionServices.programacionFindByDiaYsucursal(dia, sucursal_id)
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
        req.body.dia = moment(req.body.dia).format('e');
        console.log(req.body);
        programacionServices.jsonToTables('update', req.body)
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
const programacionCreateSucursal = () => {
    return (req, res, next) => {
        programacionServices.createSucursal(req.body)
        .then(r => {
            console.log('<SUCURSAL> SUCCESSFULLY CREATED');
            console.log("CREATING <SOBRANTES> TABLE");
            sobranteServices.createSobrante(req.body)
                .then(rr => {
                    res.json({MSG: 'ALL TABLES SUCCESFULLY CREATED'});
                })
                .catch(e => {
                    next(boom.badRequest(e));
                })
        })
        .catch(e => {
            next(boom.badRequest(e));
        });
    }
}
const programacionDeleteSucursal = () => {
    return (req, res, next) => {
        programacionServices.deleteSucursal(req.query)
        .then(r => {
            console.log('<SUCURSAL> SUCCESSFULLY DELETED');
            console.log("DELETING <SOBRANTES> TABLE");
            sobranteServices.deleteSobrante(req.query)
                .then(rr => {
                    res.json({MSG: 'ALL TABLES SUCCESFULLY DELETED'});
                })
                .catch(e => {
                    next(boom.badRequest(e));
                })
        })
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