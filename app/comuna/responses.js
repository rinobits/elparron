// packages
const boom                      = require('@hapi/boom');
// imports & consts
const ComunaServices           = require('./services');
const comunaServices            = new ComunaServices();

const comunaFindAll = () => {
    return (req, res, next) => {
        comunaServices.comunaFindAll()
            .then(r => {
                res.json(r);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const comunaFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        comunaServices.comunaFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const comunaCreateOrUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        comunaServices.comunaCreateOrUpdateById(id, body) 
            .then(r  => res.json({response: 'created and/or updated sucessfully'}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const comunaDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        comunaServices.comunaDeleteById(id, req.body)
            .then(r  => {
                if(req.body.estado == 1) res.json({'RESTORE DATA': true})
                else                     res.json({'DELETE DATA' : true})
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    comunaFindAll,
    comunaFindById,
    comunaCreateOrUpdateById,
    comunaDeleteById
};

