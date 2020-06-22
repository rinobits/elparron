const Joi         = require('@hapi/joi');

const name        = Joi.string().min(2).max(15);
const phone       = Joi.string().min(8).max(15);
const torta_id    = Joi.number().min(0); 
const tamano_id   = Joi.number().min(0);
const description = Joi.string().allow("");
const message     = Joi.string().allow("");
const value       = Joi.number().min(1).max(1000000);
const deposit     = Joi.number().min(1).max(999999).allow("");
const horaEntrega = Joi.string().min(2).max(5);
const estado      = Joi.number().min(0).max(1);
const id          = Joi.number().min(0);

const idShema    = Joi.object({
    id: id.required()
})
const armarSchemaCreate = Joi.object({
    name:      name.required(),
    phone:     phone.required(),
    torta_id:  torta_id.required(),
    tamano_id: tamano_id.required(),
    description,
    message,
    value:     value.required(),
    deposit,
    horaEntrega: horaEntrega.required()
});

const armarSchemaUpdate = Joi.object({
    name,
    phone,
    torta_id,
    tamano_id,
    description,
    message,
    value,
    deposit,
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
    idShema
}