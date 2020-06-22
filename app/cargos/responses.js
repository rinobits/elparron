// packages
const boom                      = require('@hapi/boom');
// imports & consts
const UserServices              = require('./services');
const userServices              = new UserServices();

const cargosFindAll = () => {
    return (req, res, next) => {
        userServices.cargosFindAll()
            .then(r => {
                //r = [...responses.users];
                res.json(r);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const cargosFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        userServices.cargosFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const cargosCreate = () => {
    return (req, res, next) => {
        const {body} = req;
        userServices.cargosCreate(body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const cargosUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        userServices.cargosUpdateById(id, body) 
        .then(r  => res.json({"MODIFY DATA": true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
const cargosDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        userServices.cargosDeleteById(id)
            .then(r  => res.json({'DELETE DATA' : true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    cargosFindAll,
    cargosFindById,
    cargosCreate,
    cargosUpdateById,
    cargosDeleteById
};

