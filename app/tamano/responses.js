// packages
const boom                      = require('@hapi/boom');
// imports & consts
const TamanoServices              = require('./services');
const tamanoServices              = new TamanoServices();

const tamanoFindAll = () => {
    return (req, res, next) => {
        tamanoServices.tamanoFindAll()
            .then(r => {
                res.json(r);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const tamanoFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        tamanoServices.tamanoFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const tamanoCreate = () => {
    return (req, res, next) => {
        tamanoServices.tamanoCreate(req.body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const tamanoUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        tamanoServices.tamanoUpdateById(id, body) 
            .then(r  => res.json({"MODIFY DATA": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const tamanoDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        tamanoServices.tamanoDeleteById(id, req.body)
            .then(r  => {
                if(req.body.estado == 1) res.json({'DELETE DATA' : true})
                else                     res.json({'RESTORE DATA': true})
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    tamanoFindAll,
    tamanoFindById,
    tamanoCreate,
    tamanoUpdateById,
    tamanoDeleteById
};

