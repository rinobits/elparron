// packages
const boom                      = require('@hapi/boom');
// imports & consts
const UserServices              = require('./services');
const userServices              = new UserServices();

const usersFindAll = () => {
    return (req, res, next) => {
        userServices.usersFindAll()
            .then(r => {
                for(let i = 0; i < r.users.length; i++){
                    delete r.users[i].dataValues.userPassword;
                }
                i = 0;
                r = [...responses.users];
                res.json(r);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const usersFindById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        userServices.usersFindById(id)
            .then(r => {
                delete r.user.dataValues.userPassword;
                res.json(r.user.dataValues)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const usersCreate = () => {
    return (req, res, next) => {
        const {body} = req;
        userServices.usersCreate(body)
            .then(r  => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const usersUpdateById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        userServices.usersUpdateById(id, body) 
        .then(r  => res.json({"MODIFY DATA": true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
const usersDeleteById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        userServices.usersDeleteById(id)
            .then(r  => res.json({'DELETE DATA' : true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    usersFindAll,
    usersFindById,
    usersCreate,
    usersUpdateById,
    usersDeleteById
};

