// packages
const boom            = require('@hapi/boom');
// imports & consts
const SeccionServices = require('./services');
const seccionServices = new SeccionServices();

const seccionFindAll = () => {
    return (req, res, next) => {
        seccionServices.seccionFindAll()
            .then(r => {
                res.json(r);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const seccionFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        seccionServices.seccionFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const seccionCreateOrUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        seccionServices.seccionCreateOrUpdateById(id, body) 
            .then(r  => res.json({'response': 'created/updated sucessfully'}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const seccionDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        seccionServices.seccionDeleteById(id, req.body)
            .then(r  => {
                if(req.body.estado == 0) res.json({'DELETE DATA' : true})
                else                     res.json({'RESTORE DATA': true})
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    seccionFindAll,
    seccionFindById,
    seccionCreateOrUpdateById,
    seccionDeleteById
};

