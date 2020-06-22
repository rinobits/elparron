// packages
const boom                      = require('@hapi/boom');
// imports & consts
const TortaServices              = require('./services');
const tortaServices              = new TortaServices();

const tortasFindAll = () => {
    return (req, res, next) => {
        tortaServices.tortasFindAll()
            .then(r => {
                //r = [...responses.users];
                res.json(r);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const tortasFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        tortaServices.tortasFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const tortasCreate = () => {
    return (req, res, next) => {
        const {body} = req;
        tortaServices.tortasCreate(body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const tortasUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        tortaServices.tortasUpdateById(id, body) 
        .then(r  => res.json({"MODIFY DATA": true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
const tortasDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        tortaServices.tortasDeleteById(id)
            .then(r  => res.json({'DELETE DATA' : true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    tortasFindAll,
    tortasFindById,
    tortasCreate,
    tortasUpdateById,
    tortasDeleteById
};

