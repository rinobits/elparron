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
            .catch(e => next(boom.badImplementation(e)))
    }
}
const productoTipoFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        productoTipoServices.productoTipoFindById(id)
            .then(r => {
                res.json(r);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const productoTipoCreateOrUpdateById = () => {
    return (req, res, next) => {
        const {id}   = req.params;
        productoTipoServices.productoTipoCreateOrUpdateById(id, req.body) 
            .then(r  => res.json({'response': 'created/updated sucessfully'}))
            .catch(e => next(boom.badImplementation(e)))
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
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    productoTipoFindAll,
    productoTipoFindById,
    productoTipoCreateOrUpdateById,
    productoTipoDeleteById
};

