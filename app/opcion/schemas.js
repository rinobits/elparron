// packages
const Joi        = require('@hapi/joi');
// consts       
const id         = Joi.number().min(0);     
const nombre     = Joi.string().max(200);
const seccion_id = Joi.number().min(0);  
const icono      = Joi.string().max(100);
const estado     = Joi.number().min(0).max(1);

const idSchema = Joi.object({
    id: id.required()
})
const opcionSchemaCreate = Joi.object({
    opcion   :  opcion.required(),
    personas :  personas.required(),
    nombre:     nombre.required(),
    seccion_id: seccion_od.required(),
    icono:      icono.required()
})

const opcionSchemaUpdate = Joi.object({
    opcion,
    personas,
    nombre,
    seccion_id,
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