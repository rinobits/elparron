// packages
const Joi         = require('@hapi/joi');
// consts
const sucursal_id = Joi.number().min(0);
const dia         = Joi.number().min(1).max(6);
const torta_id    = Joi.number().min(0);
const tamano_id   = Joi.number().min(0);
const cantidad    = Joi.number().min(0);
const estado      = Joi.number().min(0).max(1);
const id          = Joi.number().min(0);

const idSchema          = Joi.object({
    id: id.required()
})
const programacionSchemaCreate = Joi.object({
    sucursal_id: sucursal_id.required(),
    dia:         dia.required(),
    torta_id:    torta_id.required(),
    tamano_id:   tamano_id.required(),
    cantidad,
})

const programacionSchemaUpdate = Joi.object({
    sucursal_id,
    dia,
    torta_id,
    tamano_id,
    estado
});
const programacionSchemaDelete = Joi.object({
    estado: estado.required()
})
module.exports = {
    programacionSchemaCreate,
    programacionSchemaUpdate,
    programacionSchemaDelete,
    idSchema
}