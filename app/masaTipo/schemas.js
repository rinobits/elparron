// packages
const Joi              = require('@hapi/joi');
// consts
const nombre           = Joi.string();
const estado           = Joi.number().min(0).max(1);
const id               = Joi.number().min(0);

const idShema         = Joi.object({
    id: id.required()
})
const masaTipoSchemaCreate = Joi.object({
    nombre: nombre.required()
})

const masaTipoSchemaUpdate = Joi.object({
    nombre,
    estado
});
const masaTipoSchemaDelete = Joi.object({
    estado: estado.required()
})
module.exports = {
    masaTipoSchemaCreate,
    masaTipoSchemaUpdate,
    masaTipoSchemaDelete,
    idShema
}