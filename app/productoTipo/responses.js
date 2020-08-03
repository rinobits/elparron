// packages
const boom          = require('@hapi/boom');
// imports & consts
const ProductoTipoServices = require('./services');
const productoTipoServices = new ProductoTipoServices();

const productoTipoFindAll = () => {
    return (req, res, next) => {
        productoTipoServices.productoTipoFindAll()
            .then(r => {
                res.json(r);
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
const productoTipoFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        productoTipoServices.productoTipoFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
const productoTipoCreate = () => {
    return (req, res, next) => {
        productoTipoServices.productoTipoCreate(req.body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badRequest(e)))
    }
}
const productoTipoUpdateById = () => {
    return (req, res, next) => {
        const {id}   = req.params;
        productoTipoServices.productoTipoUpdateById(id, req.body) 
            .then(r  => res.json({"MODIFY DATA": true}))
            .catch(e => next(boom.badRequest(e)))
    }
}
const productoTipoDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        productoTipoServices.productoTipoDeleteById(id, req.body)
            .then(r  => {
                if(req.body.estado == 0) res.json({'DELETE DATA' : true})
                else                     res.json({'RESTORE DATA': true})
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
module.exports = {
    productoTipoFindAll,
    productoTipoFindById,
    productoTipoCreate,
    productoTipoUpdateById,
    productoTipoDeleteById
};

