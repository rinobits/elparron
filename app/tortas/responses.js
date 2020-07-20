// packages
const boom           = require('@hapi/boom');
// imports & consts
const TortaServices  = require('./services');
const tortaServices  = new TortaServices();

const tortaFindAll = () => {
    return (req, res, next) => {
        tortaServices.tortaFindAll()
            .then(r => {
                res.json(r);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const tortaFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        tortaServices.tortaFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const tortaCreate = () => {
    return (req, res, next) => {
        const {body} = req;
        tortaServices.tortaCreate(body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const tortaUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        tortaServices.tortaUpdateById(id, body) 
        .then(r  => res.json({"MODIFY DATA": true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
const tortaDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        tortaServices.tortaDeleteById(id)
            .then(r  => res.json({'DELETE DATA' : true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    tortaFindAll,
    tortaFindById,
    tortaCreate,
    tortaUpdateById,
    tortaDeleteById
};

