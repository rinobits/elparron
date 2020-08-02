// packages
const Joi         = require('@hapi/joi');
// consts
const id          = Joi.number().min(0);
const producto_id = Joi.number().min(0);
const tamano_id   = Joi.number().min(0);
const masaTipo_id = Joi.number().min(0);
const diet        = Joi.number().min(0);
const cuadrada    = Joi.number().min(0);
const costo       = Joi.number().min(0);
const venta       = Joi.number().min(0);
const sucursal_id = Joi.number().min(0);
const estado      = Joi.number().min(0).max(1);

const idSchema          = Joi.object({
    id: id.required()
});
const precioSchemaCreate = Joi.object({
    producto_id : producto_id.required(),
    tamano_id :   tamano_id.required(),
    masaTipo_id : masaTipo_id.required(),
    diet :        diet.required(),
    cuadrada :    cuadrada.required(),
    costo :       costo.required(),
    venta :       venta.required(),
    sucursal_id : sucursal_id.required()
});
const precioSchemaUpdate = Joi.object({
    producto_id,
    tamano_id,
    masaTipo_id,
    diet,
    cuadrada,
    costo,
    venta,
    sucursal_id,
    estado
});
const precioSchemaDelete = Joi.object({
    estado: estado.required()
});
module.exports = {
    precioSchemaCreate,
    precioSchemaUpdate,
    precioSchemaDelete,
    idSchema
}