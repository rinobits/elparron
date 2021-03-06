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
const masaTipoCreateOrUpdateById = () => {
    return (req, res, next) => {
        masaTipoServices.masaTipoCreateOrUpdateById(req.params.id, req.body) 
            .then(r  => res.json({'response': 'created/updated sucessfully'}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const masaTipoDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        masaTipoServices.masaTipoDeleteById(id, req.body)
            .then(r  => {
                if(req.body.estado == 1) res.json({'RESTORE DATA': true})
                else                     res.json({'DELETE DATA' : true})
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    masaTipoFindAll,
    masaTipoFindById,
    masaTipoCreateOrUpdateById,
    masaTipoDeleteById
};

