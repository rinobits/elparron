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
const precioTortaCreate = () => {
    return (req, res, next) => {
        precioTortaServices.jsonToTables('create', req.body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badRequest(e)))
    }
}
const precioTortaUpdate = () => {
    return (req, res, next) => {
        precioTortaServices.jsonToTables('update', req.body)
            .then(r  => res.json({"MODIFY DATA": true}))
            .catch(e => next(boom.badRequest(e)))
    }
}
module.exports = {
    precioTortaFindByStore,
    precioTortaCreate,
    precioTortaUpdate,
};

