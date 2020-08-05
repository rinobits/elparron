// packages
const boom          = require('@hapi/boom');
// imports & consts
const PrecioProductoServices = require('./services');
const precioProductoServices = new PrecioProductoServices();

const precioProductoFindByStore = () => {
    return (req, res, next) => {
        const { sucursal_id } = req.query;
        precioProductoServices.precioProductoFindByStore(sucursal_id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
const precioProductoUpdateOrCreate = () => {
    return (req, res, next) => {
        precioProductoServices.jsonToTables(req.body)
            .then(r  => res.json({response: 'updated and/or created sucessfully'}))
            .catch(e => next(boom.badRequest(e)))
    }
}
module.exports = {
    precioProductoFindByStore,
    precioProductoUpdateOrCreate,
};

