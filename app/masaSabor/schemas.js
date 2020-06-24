// packages
const Joi              = require('@hapi/joi');
// consts
const nombre           = Joi.string();
const estado           = Joi.number().min(0).max(1);
const id               = Joi.number().min(0);

const idSchema         = Joi.object({
    id: id.required()
})
const masaSaborSchemaCreate = Joi.object({
    nombre: nombre.required()
})

const masaSaborSchemaUpdate = Joi.object({
    nombre,
    estado
});
const masaSaborSchemaDelete = Joi.object({
    estado: estado.required()
})
module.exports = {
    masaSaborSchemaCreate,
    masaSaborSchemaUpdate,
    masaSaborSchemaDelete,
    idSchema
}