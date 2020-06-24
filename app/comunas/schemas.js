// packages
const Joi              = require('@hapi/joi');
// consts
const nombre           = Joi.string();
const ciudad           = Joi.string();
const estado           = Joi.number().min(0).max(1);
const id               = Joi.number().min(0);

const idSchema         = Joi.object({
    id: id.required()
})
const comunaSchemaCreate = Joi.object({
    nombre: nombre.required(),
    ciudad: ciudad.required()
})

const comunaSchemaUpdate = Joi.object({
    nombre,
    ciudad,
    estado
});
const comunaSchemaDelete = Joi.object({
    estado: estado.required()
})
module.exports = {
    comunaSchemaCreate,
    comunaSchemaUpdate,
    comunaSchemaDelete,
    idSchema
}