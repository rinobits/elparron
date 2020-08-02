// packages
const boom             = require('@hapi/boom');
// imports & consts
const MasaTipoServices = require('./services');
const masaTipoServices = new MasaTipoServices();

const masaTipoFindAll = () => {
    return (req, res, next) => {
        masaTipoServices.masaTipoFindAll()
            .then(r => {
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
        (req);
        masaTipoServices.masaTipoCreate(req.body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const masaTipoUpdateById = () => {
    return (req, res, next) => {
        masaTipoServices.masaTipoUpdateById(req.params, req.body) 
            .then(r  => res.json({"MODIFY DATA": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const masaTipoDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        masaTipoServices.masaTipoDeleteById(id, req.body)
            .then(r  => {
                if(req.body.estado == 1) res.json({'DELETE DATA' : true})
                else                     res.json({'RESTORE DATA': true})
            })
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

