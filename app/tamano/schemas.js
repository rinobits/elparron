// packages
const Joi      = require('@hapi/joi');
// consts       
const num      = Joi.string();
const personas = Joi.string();
const estado   = Joi.number().min(0).max(1);
const id       = Joi.number().min(0);     

const idSchema = Joi.object({
    id: id.required()
})
const tamanoSchemaCreate = Joi.object({
    num      : num.required(),
    personas : personas.required()
})

const tamanoSchemaUpdate = Joi.object({
    num,
    personas,
    estado
});
const tamanoSchemaDelete = Joi.object({
    estado: estado.required()
})
module.exports = {
    tamanoSchemaCreate,
    tamanoSchemaUpdate,
    tamanoSchemaDelete,
    idSchema
}