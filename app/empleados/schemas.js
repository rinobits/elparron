// packages
const Joi              = require('@hapi/joi');
// consts
const rut              = Joi.string().min(8).max(12);
const nombres          = Joi.string();
const apellidoPaterno  = Joi.string();
const apellidoMaterno  = Joi.string();
const cargo_id         = Joi.number().min(0);
const email            = Joi.string().email();
const estado           = Joi.number().min(0).max(1);
const id               = Joi.number().min(0);

const idSchema         = Joi.object({
    id: id.required()
})
const empleadoSchemaCreate = Joi.object({
    rut:             rut.required(),
    nombres:         nombres.required(),
    apellidoPaterno: apellidoPaterno.required(),
    apellidoMaterno: apellidoMaterno.required(),
    cargo_id:        cargo_id.required(),
    email:           email.required()
})

const empleadoSchemaUpdate = Joi.object({
    rut,
    nombres,
    apellidoPaterno,
    apellidoMaterno,
    cargo_id,
    email,
    estado
});
const empleadoSchemaDelete = Joi.object({
    estado: estado.required()
})
module.exports = {
    empleadoSchemaCreate,
    empleadoSchemaUpdate,
    empleadoSchemaDelete,
    idSchema
}