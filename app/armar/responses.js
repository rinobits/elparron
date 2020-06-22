// package
const boom                      = require('@hapi/boom');

// imports & consts 
const ArmarServices = require('./services');
const armarServices = new ArmarServices();

const armarFindAll = () => {
    return (req, res, next) => {
        armarServices.armarFindAll()
            .then(responses => {
                res.json(responses)
            })
            .catch(e => next(boom.badImplementation(e)))
        }
}
const armarFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        armarServices.armarFindById(id)
            .then(response => {
                res.json(response);
            })
            .catch(e => next(boom.badImplementation(e)))
        }
}
const armarCreate = () => {
       return (req, res, next) => {
            const {body} = req;
            armarServices.armarCreate(body)
            .then(response => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const armarUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        armarServices.armarUpdateById(id, body) // (!)
        .then(response => res.json({"MODIFY DATA": true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
const armarDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params
        armarServices.armarDeleteById(id)
            .then(response => res.json({"DELETE DATA": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    armarFindAll,
    armarFindById,
    armarCreate,
    armarUpdateById,
    armarDeleteById
};

