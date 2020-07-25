// packages
const Joi         = require('@hapi/joi');
// consts
const estado      = Joi.number().min(0).max(1);
const dia         = Joi.number().min(1).max(6);
const fecha       = Joi.string().min(10).max(10);
const sucursal_id = Joi.number().min(0);
const cantidades  = Joi.object().keys({
    tamano_id : Joi.number().min(0).required(),
    cantidad  : Joi.number().min(0).required()
})
const tortas = Joi.object().keys({
    torta_id      : Joi.number().min(0).required(),
    cantidades    : Joi.array().items(
        cantidades, cantidades,
        cantidades, cantidades).required()
});
const detalle = Joi.array().items(
    tortas, tortas, tortas,
    tortas, tortas, tortas,
    tortas, tortas, tortas,
    tortas, tortas, tortas,
    tortas);

const paramSchema = Joi.object({
    fecha:       fecha.required(),
    sucursal_id: sucursal_id.required()
});
const sobranteSchemaCreate = Joi.object({
    dia:         dia.required(),
    sucursal_id: sucursal_id.required(),
    detalle:     detalle.required(),
    estado
});
const sobranteSchemaUpdate = Joi.object({
    dia,
    sucursal_id,
    detalle,
    estado
});

module.exports = {
    sobranteSchemaCreate,
    sobranteSchemaUpdate,
    paramSchema
}