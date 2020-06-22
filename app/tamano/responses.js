// packages
const boom                      = require('@hapi/boom');
// imports & consts
const TamanoServices              = require('./services');
const tamanoServices              = new TamanoServices();

const tamanosFindAll = () => {
    return (req, res, next) => {
        tamanoServices.tamanosFindAll()
            .then(r => {
                //r = [...responses.users];
                res.json(r);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const tamanosFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        tamanoServices.tamanosFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const tamanosCreate = () => {
    return (req, res, next) => {
        const {body} = req;
        tamanoServices.tamanosCreate(body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const tamanosUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        tamanoServices.tamanosUpdateById(id, body) 
        .then(r  => res.json({"MODIFY DATA": true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
const tamanosDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        tamanoServices.tamanosDeleteById(id)
            .then(r  => res.json({'DELETE DATA' : true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    tamanosFindAll,
    tamanosFindById,
    tamanosCreate,
    tamanosUpdateById,
    tamanosDeleteById
};

