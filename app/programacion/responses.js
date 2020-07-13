// packages
const boom                 = require('@hapi/boom');
// imports & consts
const ProgramacionServices = require('./services');
const programacionServices = new ProgramacionServices();

const programacionFindAll = () => {
    return (req, res, next) => {
        programacionServices.programacionFindAll()
            .then(r => {
                res.json([...r.programacion]);
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
        const {body} = req;
        programacionServices.programacionCreate(body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
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
    programacionCreate,
    programacionUpdateById,
    programacionDeleteById
};

