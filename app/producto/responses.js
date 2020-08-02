// packages
const boom          = require('@hapi/boom');
// imports & consts
const ProductoServices = require('./services');
const productoServices = new ProductoServices();

const productoFindAll = () => {
    return (req, res, next) => {
        productoServices.productoFindAll()
            .then(r => {
                res.json(r);
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
const productoFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        productoServices.productoFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
const productoCreate = () => {
    return (req, res, next) => {
        productoServices.productoCreate(req.body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badRequest(e)))
    }
}
const productoUpdateById = () => {
    return (req, res, next) => {
        const {id}   = req.params;
        productoServices.productoUpdateById(id, req.body) 
            .then(r  => res.json({"MODIFY DATA": true}))
            .catch(e => next(boom.badRequest(e)))
    }
}
const productoDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        productoServices.productoDeleteById(id, req.body)
            .then(r  => {
                if(req.body.estado == 0) res.json({'DELETE DATA' : true})
                else                     res.json({'RESTORE DATA': true})
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
module.exports = {
    productoFindAll,
    productoFindById,
    productoCreate,
    productoUpdateById,
    productoDeleteById
};

