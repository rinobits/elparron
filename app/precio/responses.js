// packages
const boom          = require('@hapi/boom');
// imports & consts
const PrecioServices = require('./services');
const precioServices = new PrecioServices();

const precioFindByStore = () => {
    return (req, res, next) => {
        const { sucursal_id } = req.query;
        if(req.body.masaTipo_id){
            precioServices.precioTortaFindByStore(sucursal_id)
                .then(r => {
                    res.json(r)
                })
                .catch(e => next(boom.badRequest(e)))
        }else if(req.body.producto_id){
            precioServices.precioProductoFindByStore(sucursal_id)
                .then(r => {
                    res.json(r)
                })
                .catch(e => next(boom.badRequest(e)))
        }else{
            next(boom.badRequest("bad request"));
        }
    }
}
const precioUpdateOrCreate = () => {
    return (req, res, next) => {
        if(req.body.masaTipo_id){
            precioServices.jsonToTablesTorta(req.body)
            .then(r  => res.json({response: 'updated and/or created sucessfully'}))
            .catch(e => next(boom.badRequest(e)))
        }else if(req.body.producto_id){
            precioServices.jsonToTablesProducto(req.body)
            .then(r  => res.json({response: 'updated and/or created sucessfully'}))
            .catch(e => next(boom.badRequest(e)))
        }else{
            next(boom.badRequest("bad request"));
        }

    }
}
module.exports = {
    precioFindByStore,
    precioUpdateOrCreate,
};

