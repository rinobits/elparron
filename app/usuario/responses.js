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
const usuarioUpdateOrCreateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        usuarioServices.usuarioUpdateOrCreateById(id, body) 
            .then(r  => res.json({'response': 'created/updated sucessfully'}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const usuarioDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        usuarioServices.usuarioDeleteById(id, req.body)
            .then(r  => {
                if(req.body.estado == 0) res.json({'DELETE DATA' : true})
                else                     res.json({'RESTORE DATA': true})
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    usuarioFindAll,
    usuarioFindById,
    usuarioUpdateOrCreateById,
    usuarioDeleteById
};

