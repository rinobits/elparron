// packages
const boom          = require('@hapi/boom');
// imports & consts
const validatorHandler = require('../../utils/middlewares/validatorHandler');
const PrecioServices = require('./services');
const precioServices = new PrecioServices();
const { precioTortaSchema }     = require('./schemas/JoiTorta');
const { precioProductoSchema }  = require('./schemas/JoiProducto');
const precioFindByStore = () => {
    return (req, res, next) => {
        const { sucursal_id } = req.query;
            precioServices.precioTortaFindByStore(sucursal_id)
                .then(r => {
                    precioServices.precioProductoFindByStore(sucursal_id)
                        .then(rr => {
                            if(rr) r.push(rr);
                            res.json(r);
                        })
                        .catch(e => next(boom.badRequest(e)))
                })
                .catch(e => next(boom.badRequest(e)))

    }
}
const precioUpdateOrCreate = () => {
    return (req, res, next) => {
        if(req.body[0].masaTipo_id){
            validatorHandler(precioTortaSchema, 'body');
            precioServices.jsonToTablesTorta(req.body)
                .then(r  => res.json({response: 'updated and/or created sucessfully'}))
                .catch(e => next(boom.badRequest(e)))
        }else if(req.body[0].producto_id){
            validatorHandler(precioProductoSchema, 'body');
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

