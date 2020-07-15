// packages
const boom                 = require('@hapi/boom');
// imports & consts
const ProgramacionServices = require('./services');
const programacionServices = new ProgramacionServices();
const sortTables           = require('../../utils/plugins/sortTables');

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
                r                    = sortTables(r);
                r.forEach(table => { 
                    for(let i = 1; i <= 13; i++){
                        detalle[i-1].torta_id = table.torta_id;
                        for(let j = 0; j < 4; j++){
                            detalle[i-1].cantidades[j].tamano_id = table.tamano_id;
                            detalle[i-1].cantidades[j].cantidad  = table.cantidad;
                        }
                    }                    
                });
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
        var   { body }     = req;
        const _sucursal_id = body.sucursal_id;
        const _dia         = body.dia;
        var   detalle      = [...body.detalle];
        var   _id          = 1;
        // verify if tables already exists, if true -> drop tables & create (?)
        detalle.forEach(torta => {
            let _torta_id = torta.torta_id;
            for(let i = 0; i < 4; i++){
                let tempTable = {
                    dia:         _dia,
                    sucursal_id: _sucursal_id,
                    torta_id:    _torta_id,
                    tamano_id:   torta.cantidades[i].tamano_id,
                    cantidad:    torta.cantidades[i].cantidad }
                programacionServices.programacionCreate(tempTable)
                .then(r  => console.log(`\n<!> T A B L E  |${_id++}|  C R E A T E D <!>`))
                .catch(e => next(boom.badImplementation(e)))
            }
        })
        .then(res.json({"MODIFY DATA": true}));
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
        var   { body }     = req;
        const _sucursal_id = body.sucursal_id;
        const _dia         = body.dia;
        var   detalle      = [...body.detalle];
        var   _id          = 1;
        detalle.forEach(torta => {
            let _torta_id = torta.torta_id;
            for(let i = 0; i < 4; i++){
                tempTable = {
                    dia:         _dia,
                    sucursal_id: _sucursal_id,
                    torta_id:    _torta_id,
                    tamano_id:   torta.cantidades[i].tamano_id,
                    cantidad:    torta.cantidades[i].cantidad
                }
                programacionServices.programacionUpdateById(_id++, tempTable)
                    .then(r  => console.log(`\n<!> T A B L E  |#${_id - 1}|  U P D A T E D <!>`))
                    .catch(e => next(boom.badImplementation(e)))
            }
        })
        .then(r  => res.json({"MODIFY DATA": true}))
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
module.exports = {
    programacionFindAll,
    programacionFindById,
    programacionFindByDiaYsucursal,
    programacionCreate,
    programacionMultipleCreate,
    programacionUpdateById,
    programacionMultipleUpdate,
    programacionDeleteById,
};

