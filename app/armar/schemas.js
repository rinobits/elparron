const Joi         = require('@hapi/joi');

const nombre      = Joi.string().min(2).max(15);
const telefono    = Joi.string().min(8).max(15);
const torta_id    = Joi.number().min(0); 
const tamano_id   = Joi.number().min(0);
const descripcion = Joi.string().allow("");
const mensaje     = Joi.string().allow("");
const valor       = Joi.number().min(1).max(1000000);
const abono       = Joi.number().min(1).max(999999).allow("");
const horaEntrega = Joi.string().min(2).max(5);
const estado      = Joi.number().min(0).max(1);
const id          = Joi.number().min(0);

const idSchema    = Joi.object({
    id: id.required()
})
const armarSchemaCreate = Joi.object({
    nombre:        nombre.required(),
    telefono:      telefono.required(),
    torta_id:      torta_id.required(),
    tamano_id:     tamano_id.required(),
    descripcion,
    mensaje,
    valor:         valor.required(),
    abono,
    horaEntrega: horaEntrega.required()
});
const armarSchemaUpdate = Joi.object({
    nombre,
    telefono,
    torta_id,
    tamano_id,
    descripcion,
    mensaje,
    valor,
    abono,
    horaEntrega,
    estado
});
const armarSchemaDelete = Joi.object({
    estado: estado.required()
});

module.exports = {
    armarSchemaCreate,
    armarSchemaUpdate,
    armarSchemaDelete,
    idSchema
}