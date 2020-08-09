// packages
const boom          = require('@hapi/boom');
// imports & consts
const ProductoServices = require('./services');
const productoServices = new ProductoServices();

const productoFindAll = () => {
    return (req, res, next) => {
        productoServices.productoFindAll()
            .then(r => {
                res.json(r);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const productoFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        productoServices.productoFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const productoCreateOrUpdateById = () => {
    return (req, res, next) => {
        const {id}   = req.params;
        productoServices.productoCreateOrUpdateById(id, req.body) 
            .then(r  => res.json({'response': 'created/updated sucessfully'}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const productoDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        productoServices.productoDeleteById(id, req.body)
            .then(r  => {
                if(req.body.estado == 0) res.json({'DELETE DATA' : true})
                else                     res.json({'RESTORE DATA': true})
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    productoFindAll,
    productoFindById,
    productoCreateOrUpdateById,
    productoDeleteById
};

