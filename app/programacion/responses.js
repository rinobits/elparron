// packages
const boom                 = require('@hapi/boom');
// imports & consts
const ProgramacionServices = require('./services');
const programacionServices = new ProgramacionServices();
const fn                   = require('../../utils/plugins/functions');

const programacionFindAll = () => {
    return (req, res, next) => {
        programacionServices.programacionFindAll()
            .then(r => {
                res.json([...r.programacion]);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const programacionFindByDiaYsucursal = () => {
    return (req, res, next) => {
        const { _dia, _sucursal_id } = req.query;
        programacionServices.programacionFindByDiaYsucursal(_dia, _sucursal_id)
        .then(r  => { 
            var jsonData         = require('./schemas/programacion');
            jsonData.sucursal_id = _sucursal_id;
            jsonData.dia         = _dia;
            var detalle          = [...jsonData.detalle];
            r                    = fn.sortTables(r);
            r                    = fn.tableToJson(detalle, r)
            res.json([...r]);
        })
        .catch(e => next(boom.badImplementation(e)))
    }
}
const programacionFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        programacionServices.programacionFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const programacionCreate = () => {
    return (req, res, next) => {
        var {body} = req;
        programacionServices.programacionCreate(body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const programacionMultipleCreate = () => {
    return (req, res, next) => {
        return new Promise((resolve, reject) => {
            fn.jsonToTables('create', req.body)
            .then(r => res.json({'TABLES CREATED': true}))
            .catch(e => next(boom.badImplementation(e)))
        });
    }
}
const programacionUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        programacionServices.programacionUpdateById(id, body) 
        .then(r  => res.json({"MODIFY DATA": true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
const programacionMultipleUpdate = () => {
    return (req, res, next) => {
        fn.jsonToTables('update', req)
        .then(r => res.json({'TABLES UPDATED': true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
const programacionDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        programacionServices.programacionDeleteById(id)
            .then(r  => res.json({'DELETE DATA' : true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const programacionEmptyCurrentWeek = () => {
    return (req, res, next) => {
        fn.moveToEnd()
        .then(r => res.json({message: 'WEEK SUCCESSFYLLY RESETED'}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    programacionFindAll,
    programacionFindById,
    programacionFindByDiaYsucursal,
    programacionCreate,
    programacionMultipleCreate,
    programacionUpdateById,
    programacionMultipleUpdate,
    programacionDeleteById,
    programacionEmptyCurrentWeek
};

