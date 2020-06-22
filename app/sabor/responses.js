// packages
const boom                      = require('@hapi/boom');
// imports & consts
const SaborServices              = require('./services');
const saborServices              = new SaborServices();

const saboresFindAll = () => {
    return (req, res, next) => {
        saborServices.saboresFindAll()
            .then(r => {
                //r = [...responses.users];
                res.json(r);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const saboresFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        saborServices.saboresFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const saboresCreate = () => {
    return (req, res, next) => {
        const {body} = req;
        saborServices.saboresCreate(body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const saboresUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        saborServices.saboresUpdateById(id, body) 
        .then(r  => res.json({"MODIFY DATA": true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
const saboresDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        saborServices.saboresDeleteById(id)
            .then(r  => res.json({'DELETE DATA' : true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    saboresFindAll,
    saboresFindById,
    saboresCreate,
    saboresUpdateById,
    saboresDeleteById
};

