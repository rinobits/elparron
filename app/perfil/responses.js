// packages
const boom           = require('@hapi/boom');
// imports & consts
const PerfilServices = require('./services');
const perfilServices = new PerfilServices();

const perfilFindAll = () => {
    return (req, res, next) => {
        perfilServices.perfilFindAll()
            .then(r => {
                res.json(r);
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
const perfilFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        perfilServices.perfilFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
const perfilCreateOrUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        perfilServices.perfilCreateOrUpdateById(id, body) 
            .then(r  => res.json({'response': 'created/updated sucessfully'}))
            .catch(e => next(boom.badRequest(e)))
    }
}
const perfilDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        perfilServices.perfilDeleteById(id, req.body)
            .then(r  => {
                if(req.body.estado == 0) res.json({'DELETE DATA' : true})
                else                     res.json({'RESTORE DATA': true})
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
module.exports = {
    perfilFindAll,
    perfilFindById,
    perfilCreateOrUpdateById,
    perfilDeleteById
};

