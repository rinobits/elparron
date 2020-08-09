// packages
const boom           = require('@hapi/boom');
// imports & consts
const OpcionServices = require('./services');
const opcionServices = new OpcionServices();

const opcionFindAll = () => {
    return (req, res, next) => {
        opcionServices.opcionFindAll()
            .then(r => {
                res.json(r);
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
const opcionFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        opcionServices.opcionFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
const opcionCreateOrUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        opcionServices.opcionCreateOrUpdateById(id, body) 
            .then(r  => res.json({'response': 'created/updated sucessfully'}))
            .catch(e => next(boom.badRequest(e)))
    }
}
const opcionDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        opcionServices.opcionDeleteById(id, req.body)
            .then(r  => {
                if(req.body.estado == 0) res.json({'DELETE DATA' : true})
                else                     res.json({'RESTORE DATA': true})
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
module.exports = {
    opcionFindAll,
    opcionFindById,
    opcionCreateOrUpdateById,
    opcionDeleteById
};

