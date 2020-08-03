// packages
const boom          = require('@hapi/boom');
// imports & consts
const PrecioProductoServices = require('../services');
const precioProductoServices = new PrecioProductoServices();

const precioProductoFindByStore = () => {
    return (req, res, next) => {
        const {sucursal_id} = req.params;
        precioProductoServices.precioProductoFindByStore(sucursal_id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
const precioProductoCreate = () => {
    return (req, res, next) => {
        precioProductoServices.precioProductoCreate(req.body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badRequest(e)))
    }
}
const precioProductoUpdateById = () => {
    return (req, res, next) => {
        const {id}   = req.params;
        precioProductoServices.precioProductoUpdateById(id, req.body) 
            .then(r  => res.json({"MODIFY DATA": true}))
            .catch(e => next(boom.badRequest(e)))
    }
}
module.exports = {
    precioProductoFindByStore,
    precioProductoCreate,
    precioProductoUpdateById,
};

