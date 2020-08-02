// packages
const Joi             = require('@hapi/joi');
// consts
const id              = Joi.number().min(0);
const nombre          = Joi.string().max(255);
const productoTipo_id = Joi.number().min(0);
const diet            = Joi.number().min(0);
const estado          = Joi.number().min(0).max(1);

const idSchema          = Joi.object({
    id: id.required()
});
const productoSchemaCreate = Joi.object({
    productoTipo_id: productoTipo_id.required(),
    diet:            diet.required(),
    nombre:          nombre.required()
});
const productoSchemaUpdate = Joi.object({
    productoTipo_id,
    diet,
    nombre,
    estado
});
const productoSchemaDelete = Joi.object({
    estado: estado.required()
});
module.exports = {
    productoSchemaCreate,
    productoSchemaUpdate,
    productoSchemaDelete,
    idSchema
}