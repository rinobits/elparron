// packages
const boom              = require('@hapi/boom');
// imports & consts     
const MasaSaborServices = require('./services');
const masaSaborServices = new MasaSaborServices();

const masaSaborFindAll = () => {
    return (req, res, next) => {
        masaSaborServices.masaSaborFindAll()
            .then(r => {
                res.json(r);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const masaSaborFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        masaSaborServices.masaSaborFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const masaSaborCreateOrUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        masaSaborServices.masaSaborCreateOrUpdateById(id, body) 
            .then(r  => res.json({'response': 'created/updated sucessfully'}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const masaSaborDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        masaSaborServices.masaSaborDeleteById(id, req.body)
            .then(r  => {
                if(req.body.estado == 1) res.json({'RESTORE DATA': true})
                else                     res.json({'DELETE DATA' : true})
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    masaSaborFindAll,
    masaSaborFindById,
    masaSaborCreateOrUpdateById,
    masaSaborDeleteById
};

