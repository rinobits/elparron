// packages
const boom                          = require('@hapi/boom');
// imports & consts
const SucursalServices              = require('./services');
const sucursalServices              = new SucursalServices();

const sucursalFindAll = () => {
    return (req, res, next) => {
        sucursalServices.sucursalFindAll()
            .then(r => {
                res.json([...r.sucursal]);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const sucursalFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        sucursalServices.sucursalFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const sucursalCreate = () => {
    return (req, res, next) => {
        const {body} = req;
        sucursalServices.sucursalCreate(body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const sucursalUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        sucursalServices.sucursalUpdateById(id, body) 
        .then(r  => res.json({"MODIFY DATA": true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
const sucursalDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        sucursalServices.sucursalDeleteById(id)
            .then(r  => res.json({'DELETE DATA' : true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    sucursalFindAll,
    sucursalFindById,
    sucursalCreate,
    sucursalUpdateById,
    sucursalDeleteById
};

