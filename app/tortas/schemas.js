const Joi = require('@hapi/joi');

const estado        = Joi.number().min(0).max(1);
const masaTipo_id   = Joi.number().min(0);
const masaSabor_id  = Joi.number().min(0);
const sabor_id      = Joi.number().min(0);
const id            = Joi.number().min(0);

const idShema     = Joi.object({
    id: id.required()
})
const tortaSchemaCreate = Joi.object({
    masaTipo_id:  masaTipo_id.required(),
    masaSabor_id: masaSabor_id.required(),
    sabor_id: sabor_id.required(),
});
const tortaSchemaUpdate = Joi.object({
    masaTipo_id,
    masaSabor_id,
    sabor_id, 
    estado
});
const tortaSchemaDelete = Joi.object({
    estado: estado.required()
})

module.exports = {
    tortaSchemaCreate,
    tortaSchemaUpdate,
    tortaSchemaDelete,
    idShema
}