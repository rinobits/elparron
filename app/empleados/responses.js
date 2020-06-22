// packages
const boom                      = require('@hapi/boom');
// imports & consts
const EmpleadoServices          = require('./services');
const empleadoServices          = new EmpleadoServices();

const empleadosFindAll = () => {
    return (req, res, next) => {
        empleadoServices.empleadosFindAll()
            .then(r => {
                //r = [...r.empleados];
                res.json(r);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const empleadosFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        empleadoServices.empleadosFindById(id)
            .then(r => {
                res.json(r)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const empleadosCreate = () => {
    return (req, res, next) => {
        const {body} = req;
        empleadoServices.empleadosCreate(body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const empleadosUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        empleadoServices.empleadosUpdateById(id, body) 
        .then(r  => res.json({"MODIFY DATA": true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
const empleadosDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        empleadoServices.empleadosDeleteById(id)
            .then(r  => res.json({'DELETE DATA' : true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    empleadosFindAll,
    empleadosFindById,
    empleadosCreate,
    empleadosUpdateById,
    empleadosDeleteById
};

