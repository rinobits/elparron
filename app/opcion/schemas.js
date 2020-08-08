// packages
const Joi        = require('@hapi/joi');
// consts       
const id         = Joi.number().min(0);     
const nombre     = Joi.string().max(200);
const seccion_id = Joi.number().min(0);  
const perfil_id  = Joi.number().min(0);  
const icono      = Joi.string().max(100);
const estado     = Joi.number().min(0).max(1);

const idSchema = Joi.object({
    id: id.required()
})
const opcionSchemaCreate = Joi.object({
    nombre:     nombre.required(),
    seccion_id: seccion_id.required(),
    perfil_id:  perfil_id.required(),
    icono:      icono.required()
})

const opcionSchemaUpdate = Joi.object({
    nombre,
    seccion_id,
    perfil_id,
    icono,
    estado
});
const opcionSchemaDelete = Joi.object({
    estado: estado.required()
})
module.exports = {
    opcionSchemaCreate,
    opcionSchemaUpdate,
    opcionSchemaDelete,
    idSchema
}