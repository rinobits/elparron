// packages
const boom                      = require('@hapi/boom');
// imports & consts
const MasaSaborServices              = require('./services');
const masaSaborServices              = new MasaSaborServices();

const masaSaborFindAll = () => {
    return (req, res, next) => {
        masaSaborServices.masaSaborFindAll()
            .then(r => {
                //r = [...responses.users];
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
const masaSaborCreate = () => {
    return (req, res, next) => {
        const {body} = req;
        masaSaborServices.masaSaborCreate(body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const masaSaborUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        masaSaborServices.masaSaborUpdateById(id, body) 
        .then(r  => res.json({"MODIFY DATA": true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
const masaSaborDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        masaSaborServices.masaSaborDeleteById(id)
            .then(r  => res.json({'DELETE DATA' : true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    masaSaborFindAll,
    masaSaborFindById,
    masaSaborCreate,
    masaSaborUpdateById,
    masaSaborDeleteById
};

