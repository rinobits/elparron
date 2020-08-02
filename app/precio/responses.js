// packages
const boom          = require('@hapi/boom');
// imports & consts
const PrecioServices = require('./services');
const precioServices = new PrecioServices();

const precioFindAll = () => {
    return (req, res, next) => {
        precioServices.precioFindAll()
            .then(r => {
                res.json(r);
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
const precioFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        precioServices.precioFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
const precioCreate = () => {
    return (req, res, next) => {
        precioServices.precioCreate(req.body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badRequest(e)))
    }
}
const precioUpdateById = () => {
    return (req, res, next) => {
        const {id}   = req.params;
        precioServices.precioUpdateById(id, req.body) 
            .then(r  => res.json({"MODIFY DATA": true}))
            .catch(e => next(boom.badRequest(e)))
    }
}
const precioDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        precioServices.precioDeleteById(id, req.body)
            .then(r  => {
                if(req.body.estado == 1) res.json({'DELETE DATA' : true})
                else                     res.json({'RESTORE DATA': true})
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
module.exports = {
    precioFindAll,
    precioFindById,
    precioCreate,
    precioUpdateById,
    precioDeleteById
};

