// packages
const Joi         = require('@hapi/joi');
// consts
const id          = Joi.number().min(0);
const tamano_id   = Joi.number().min(0);
const masaTipo_id = Joi.number().min(0);
const diet        = Joi.number().min(0);
const cuadrada    = Joi.number().min(0);
const costo       = Joi.number().min(0);
const venta       = Joi.number().min(0);
const sucursal_id = Joi.number().min(0);

const idSchema          = Joi.object({
    id: id.required()
});
const precioTamanoCosto = Joi.object({
    tamano_id: tamano_id.required(),
    costo:     costo.required(),
    venta:     venta.required()
});
const precioTamano = Joi.array().items(
    precioTamanoCosto, precioTamanoCosto,
    precioTamanoCosto, precioTamanoCosto
)
const precioTortaSchemaSub = Joi.object({
    masaTipo_id : masaTipo_id.required(),
    diet :        diet.required(),
    cuadrada :    cuadrada.required(),
    precioTamano: precioTamano.required(),
    sucursal_id : sucursal_id.required()
});
const precioTortaSchema = Joi.array().min(1).items(precioTortaSchemaSub);
module.exports = {
    precioTortaSchema,
    idSchema
}