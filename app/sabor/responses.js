// packages
const boom          = require('@hapi/boom');
// imports & consts
const SaborServices = require('./services');
const saborServices = new SaborServices();

const saborFindAll = () => {
    return (req, res, next) => {
        saborServices.saborFindAll()
            .then(r => {
                res.json(r);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const saborFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        saborServices.saborFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const saborCreate = () => {
    return (req, res, next) => {
        const {body} = req;
        saborServices.saborCreate(body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const saborUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        saborServices.saborUpdateById(id, body) 
        .then(r  => res.json({"MODIFY DATA": true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
const saborDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        saborServices.saborDeleteById(id)
            .then(r  => res.json({'DELETE DATA' : true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    saborFindAll,
    saborFindById,
    saborCreate,
    saborUpdateById,
    saborDeleteById
};

