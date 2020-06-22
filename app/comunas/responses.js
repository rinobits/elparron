// packages
const boom                      = require('@hapi/boom');
// imports & consts
const ComunaServices              = require('./services');
const comunaServices              = new ComunaServices();

const comunaFindAll = () => {
    return (req, res, next) => {
        comunaServices.comunaFindAll()
            .then(r => {
                //r = [...responses.users];
                res.json(r);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const comunaFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        comunaServices.comunaFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const comunaCreate = () => {
    return (req, res, next) => {
        const {body} = req;
        comunaServices.comunaCreate(body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const comunaUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        comunaServices.comunaUpdateById(id, body) 
        .then(r  => res.json({"MODIFY DATA": true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
const comunaDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        comunaServices.comunaDeleteById(id)
            .then(r  => res.json({'DELETE DATA' : true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    comunaFindAll,
    comunaFindById,
    comunaCreate,
    comunaUpdateById,
    comunaDeleteById
};

