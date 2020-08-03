// packages
const boom          = require('@hapi/boom');
// imports & consts
const PrecioTortaServices = require('../services');
const precioTortaServices = new PrecioTortaServices();

const precioTortaFindByStore = () => {
    return (req, res, next) => {
        const {sucursal_id} = req.params;
        precioTortaServices.precioTortaFindByStore(sucursal_id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
const precioTortaCreate = () => {
    return (req, res, next) => {
        precioTortaServices.precioTortaCreate(req.body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badRequest(e)))
    }
}
const precioTortaUpdateById = () => {
    return (req, res, next) => {
        const {id}   = req.params;
        precioTortaServices.precioTortaUpdateById(id, req.body) 
            .then(r  => res.json({"MODIFY DATA": true}))
            .catch(e => next(boom.badRequest(e)))
    }
}
module.exports = {
    precioTortaFindByStore,
    precioTortaCreate,
    precioTortaUpdateById,
};

