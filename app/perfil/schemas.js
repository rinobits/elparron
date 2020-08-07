// packages
const Joi    = require('@hapi/joi');
// consts       
const nombre = Joi.string().max(200);
const estado = Joi.number().min(0).max(1);
const id     = Joi.number().min(0);     

const idSchema = Joi.object({
    id: id.required()
})
const perfilSchemaCreate = Joi.object({
    nombre: nombre.required()
})

const perfilSchemaUpdate = Joi.object({
    nombre,
    estado
});
const perfilSchemaDelete = Joi.object({
    estado: estado.required()
})
module.exports = {
    perfilSchemaCreate,
    perfilSchemaUpdate,
    perfilSchemaDelete,
    idSchema
}