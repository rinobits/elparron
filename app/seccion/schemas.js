// packages
const Joi      = require('@hapi/joi');
// consts       
const nombre   = Joi.string().max(200);
const estado   = Joi.number().min(0).max(1);
const id       = Joi.number().min(0);     

const idSchema = Joi.object({
    id: id.required()
})
const seccionSchemaCreate = Joi.object({
    nombre   : nombre.required()
})

const seccionSchemaUpdate = Joi.object({
    nombre,
    estado
});
const seccionSchemaDelete = Joi.object({
    estado: estado.required()
})
module.exports = {
    seccionSchemaCreate,
    seccionSchemaUpdate,
    seccionSchemaDelete,
    idSchema
}