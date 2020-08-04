// packages
const Joi             = require('@hapi/joi');
// consts
const id              = Joi.number().min(0);
const nombre          = Joi.string().max(255);
const estado          = Joi.number().min(0).max(1);

const idSchema          = Joi.object({
    id: id.required()
});
const productoTipoSchemaCreate = Joi.object({
    nombre: nombre.required()
});
const productoTipoSchemaUpdate = Joi.object({
    nombre,
    estado
});
const productoTipoSchemaDelete = Joi.object({
    estado: estado.required()
});
module.exports = {
    productoTipoSchemaCreate,
    productoTipoSchemaUpdate,
    productoTipoSchemaDelete,
    idSchema
}