// packages
const Joi      = require('@hapi/joi');
// consts       
const tamano   = Joi.string();
const personas = Joi.string();
const estado   = Joi.number().min(0).max(1);
const id       = Joi.number().min(0);     

const idSchema = Joi.object({
    id: id.required()
})
const tamanoSchemaCreate = Joi.object({
    tamano   : tamano.required(),
    personas : personas.required()
})

const tamanoSchemaUpdate = Joi.object({
    tamano,
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