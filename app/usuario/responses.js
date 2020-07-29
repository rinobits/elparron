// packages
const boom         = require('@hapi/boom');
// imports & consts
const UsuarioServices = require('./services');
const usuarioServices = new UsuarioServices();
const usuarioFindAll = () => {
    return (req, res, next) => {
        usuarioServices.usuarioFindAll()
            .then(r => {
                for(let i = 0; i < r.length; i++){
                    delete r[i].userPassword;
                }
                res.json(r);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const usuarioFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        usuarioServices.usuarioFindById(id)
            .then(r => {
                delete r[0].userPassword;
                res.json(r)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const usuarioCreate = () => {
    return (req, res, next) => {
        const {body} = req;
        usuarioServices.usuarioCreate(body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const usuarioUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        usuarioServices.usuarioUpdateById(id, body) 
        .then(r  => res.json({"MODIFY DATA": true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
const usuarioDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        usuarioServices.usuarioDeleteById(id, req.body)
            .then(r  => res.json({'DELETE DATA' : true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    usuarioFindAll,
    usuarioFindById,
    usuarioCreate,
    usuarioUpdateById,
    usuarioDeleteById
};

