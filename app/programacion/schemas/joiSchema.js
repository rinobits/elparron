// packages
const Joi         = require('@hapi/joi');
// consts
const id          = Joi.number().min(0); 
const estado      = Joi.number().min(0).max(1);
const dia         = Joi.number().min(1).max(6);
const sucursal_id = Joi.number().min(0);
const detalle     = Joi.array().items(Joi.object().keys({
    torta_id      : Joi.number().min(0).required(),
    cantidades    : Joi.array().items(Joi.object().keys({
        tamano_id : Joi.number().min(0).required(),
        cantidad  : Joi.number().min(0).required()
    })).required()
}));

const idSchema  = Joi.object({
    id: id.required()
});
const paramSchema = Joi.object({
    dia: dia.required(),
    sucursal_id: sucursal_id.required()
})
const programacionSchemaCreate = Joi.object({
    dia        : dia.required(),
    sucursal_id: sucursal_id.required(),
    detalle    : detalle.required()
});
const programacionSchemaUpdate = Joi.object({
    dia,
    sucursal_id,
    detalle,
    estado
});
const programacionSchemaDelete = Joi.object({
    estado: estado.required()
})
module.exports = {
    programacionSchemaCreate,
    programacionSchemaUpdate,
    programacionSchemaDelete,
    paramSchema,
    idSchema
}