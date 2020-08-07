// packages
const boom          = require('@hapi/boom');
// imports & consts
const PrecioServices = require('./services');
const precioServices = new PrecioServices();

const precioFindByStore = () => {
    return (req, res, next) => {
        const { sucursal_id } = req.query;
        precioServices.precioFindByStore(sucursal_id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
const precioUpdateOrCreate = () => {
    return (req, res, next) => {
        precioServices.jsonToTables(req.body)
            .then(r  => res.json({response: 'updated and/or created sucessfully'}))
            .catch(e => next(boom.badRequest(e)))
    }
}
module.exports = {
    precioFindByStore,
    precioUpdateOrCreate,
};

