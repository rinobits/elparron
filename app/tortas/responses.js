// packages
const boom           = require('@hapi/boom');
// imports & consts
const TortaServices  = require('./services');
const tortaServices  = new TortaServices();

const tortaFindAll = () => {
    return (req, res, next) => {
        tortaServices.tortaFindAll()
            .then(r => {
                res.json(r);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const tortaFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        tortaServices.tortaFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const tortaCreateOrUpdateById = () => {
    return (req, res, next) => {
        tortaServices.tortaCreateOrUpdateById(req.params.id, req.body) 
            .then(r  => res.json({ 'response': 'created/updated sucessfully' }))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const tortaDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        tortaServices.tortaDeleteById(id, req.body)
            .then(r  => {
                if(req.body.estado == 0) res.json({'DELETE DATA' : true})
                else                     res.json({'RESTORE DATA': true})
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    tortaFindAll,
    tortaFindById,
    tortaCreateOrUpdateById,
    tortaDeleteById
};

