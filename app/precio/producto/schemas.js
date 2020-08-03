// packages
const Joi         = require('@hapi/joi');
// consts
const id          = Joi.number().min(0);
const producto_id = Joi.number().min(0);
const diet        = Joi.number().min(0);
const costo       = Joi.number().min(0);
const venta       = Joi.number().min(0);
const sucursal_id = Joi.number().min(0);
const estado      = Joi.number().min(0).max(1);

const idSchema          = Joi.object({
    id: id.required()
});
const sucursalSchema    = Joi.object({
    sucursal_id:   sucursal_id.required()
});
const precioProductoSchemaCreate = Joi.object({
    producto_id : producto_id.required(),
    diet :        diet.required(),
    costo :       costo.required(),
    venta :       venta.required(),
    sucursal_id : sucursal_id.required()
});
const precioProductoSchemaUpdate = Joi.object({
    producto_id,
    diet,
    costo,
    venta,
    sucursal_id,
    estado
});

module.exports = {
    precioProductoSchemaCreate,
    precioProductoSchemaUpdate,
    sucursalSchema,
    idSchema
}