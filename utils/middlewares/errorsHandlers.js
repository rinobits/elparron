const boom = require('@hapi/boom');
const {config} = require('../../config');

const logError = (err, req, res, next) => {
    console.log(err);
    next(err);
}
const wrapError = (err, req, res, next) => {
        if(err.statusCode == 401 && !err.isBoom){
            err = boom.unauthorized();
            next(err);
        }
        else if(!err.isBoom){
            err = boom.badImplementation(err);
            next(err);
        }else if(err.isBoom && err.code){
            err.output.payload.message = err.code;
        }
        next(err);
}
/* const withErrorStack = (err, stack) => {
    if(config.dev){
        return {error: err, stack}
    }
    return {error: err}
} */
const errorHandler = (err, req, res, next) => {
    const {output: {statusCode, payload}} = err;
    res.status(statusCode).json(payload);
}
module.exports = {
    logError,
    wrapError,
    errorHandler
}
