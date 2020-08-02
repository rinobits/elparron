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
        tortaServices.tortaCreate(req.body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const tortaUpdateById = () => {
    return (req, res, next) => {
        tortaServices.tortaUpdateById(req.params, req.body) 
            .then(r  => res.json({ "MODIFY DATA": true }))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const tortaDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        tortaServices.tortaDeleteById(id, req.body)
            .then(r  => {
                if(req.body.estado == 1) res.json({'DELETE DATA' : true})
                else                     res.json({'RESTORE DATA': true})
            })
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

