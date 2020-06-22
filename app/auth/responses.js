// packages
const boom                      = require('@hapi/boom');
// imports & consts
const AuthServices              = require('./services');
const authServices              = new AuthServices();

const login = (req, res, next) => {
    authServices.auth(req.body.userName, req.body.userPassword)
        .then(r => res.json({token : r}))
        .catch(e => next(boom.unauthorized(e)))
    }
module.exports = {
    login
}