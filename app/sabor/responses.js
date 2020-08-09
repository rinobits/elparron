// packages
const boom          = require('@hapi/boom');
// imports & consts
const SaborServices = require('./services');
const saborServices = new SaborServices();

const saborFindAll = () => {
    return (req, res, next) => {
        saborServices.saborFindAll()
            .then(r => {
                res.json(r);
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
const saborFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        saborServices.saborFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
const saborCreateOrUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        saborServices.saborCreateOrUpdateById(id, body) 
            .then(r  => res.json({'response': 'created/updated sucessfully'}))
            .catch(e => next(boom.badRequest(e)))
    }
}
const saborDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        saborServices.saborDeleteById(id, req.body)
            .then(r  => {
                if(req.body.estado == 1) res.json({'RESTORE DATA': true})
                else                     res.json({'DELETE DATA' : true})
            })
            .catch(e => next(boom.badRequest(e)))
    }
}
module.exports = {
    saborFindAll,
    saborFindById,
    saborCreateOrUpdateById,
    saborDeleteById
};

