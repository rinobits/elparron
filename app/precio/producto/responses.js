// packages
const boom          = require('@hapi/boom');
// imports & consts
const PrecioProductoServices = require('./services');
const precioProductoServices = new PrecioProductoServices();

const precioProductoFindByStore = () => {
    return (req, res, next) => {
        const {sucursal_id} = req.query;
        precioProductoServices.precioProductoFindByStore(sucursal_id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
const precioProductoCreate = () => {
    return (req, res, next) => {
        precioProductoServices.jsonToTables('create', req.body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badRequest(e)))
    }
}
const precioProductoUpdate = () => {
    return (req, res, next) => {
        precioProductoServices.jsonToTables('update', req.body)
            .then(r  => res.json({"MODIFY DATA": true}))
            .catch(e => next(boom.badRequest(e)))
    }
}
module.exports = {
    precioProductoFindByStore,
    precioProductoCreate,
    precioProductoUpdate
};

