const boom     = require('@hapi/boom');

const validate = (data, schema)  => {
    return schema.validate(data);
}
const setValues = (values, data, req, next) => {
    req[data] = values;
    next();
}
const validatorHandler = (schema, data) => {
    return (req, res, next) => {
        const response = validate(req[data], schema);
        if(response.error){
            response.error = boom.badRequest(response.error);
            next(response.error);
        }
        else{
            setValues(response.value, data, req, next);
        }
    }
}
module.exports = validatorHandler;

