// packages
const boom                      = require('@hapi/boom');
// imports & consts
const SucursalServices              = require('./services');
const sucursalServices              = new SucursalServices();

const sucursalesFindAll = () => {
    return (req, res, next) => {
        sucursalServices.sucursalesFindAll()
            .then(r => {
                res.json(r);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const sucursalesFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        sucursalServices.sucursalesFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const sucursalesCreate = () => {
    return (req, res, next) => {
        const {body} = req;
        sucursalServices.sucursalesCreate(body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const sucursalesUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        sucursalServices.sucursalesUpdateById(id, body) 
        .then(r  => res.json({"MODIFY DATA": true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
const sucursalesDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        sucursalServices.sucursalesDeleteById(id)
            .then(r  => res.json({'DELETE DATA' : true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    sucursalesFindAll,
    sucursalesFindById,
    sucursalesCreate,
    sucursalesUpdateById,
    sucursalesDeleteById
};

