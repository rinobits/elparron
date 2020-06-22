// packages
const boom             = require('@hapi/boom');
// imports & consts
const MasaTipoServices = require('./services');
const masaTipoServices = new MasaTipoServices();

const masaTipoFindAll = () => {
    return (req, res, next) => {
        masaTipoServices.masaTipoFindAll()
            .then(r => {
                //r = [...responses.users];
                res.json(r);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const masaTipoFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        masaTipoServices.masaTipoFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const masaTipoCreate = () => {
    return (req, res, next) => {
        const {body} = req;
        masaTipoServices.masaTipoCreate(body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const masaTipoUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        masaTipoServices.masaTipoUpdateById(id, body) 
        .then(r  => res.json({"MODIFY DATA": true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
const masaTipoDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        masaTipoServices.masaTipoDeleteById(id)
            .then(r  => res.json({'DELETE DATA' : true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    masaTipoFindAll,
    masaTipoFindById,
    masaTipoCreate,
    masaTipoUpdateById,
    masaTipoDeleteById
};

