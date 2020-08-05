// packages
const boom          = require('@hapi/boom');
// imports & consts
const PrecioTortaServices = require('./services');
const precioTortaServices = new PrecioTortaServices();

const precioTortaFindByStore = () => {
    return (req, res, next) => {
        const { sucursal_id } = req.query;
        precioTortaServices.precioTortaFindByStore(sucursal_id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
const precioTortaUpdateOrCreate = () => {
    return (req, res, next) => {
        precioTortaServices.jsonToTables(req.body)
            .then(r  => res.json({response: 'updated and/or created sucessfully'}))
            .catch(e => next(boom.badRequest(e)))
    }
}
module.exports = {
    precioTortaFindByStore,
    precioTortaUpdateOrCreate,
};

