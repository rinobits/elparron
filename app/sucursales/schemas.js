// packages
const Joi            = require('@hapi/joi');
// consts                 
const pattern        = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,32})");     
// usuario                
const estado         = Joi.number().min(0).max(1);
const id             = Joi.number().min(0);
const rut            = Joi.string().min(8).max(15);
const razonSocial    = Joi.string();       
const giro           = Joi.string();   
const direccion      = Joi.string();       
const comuna_id      = Joi.number().min(0);      
const nombre         = Joi.string();   
const contactoEmail  = Joi.string();           
const contactoNombre = Joi.string();           
const colorFondo     = Joi.string();       
const colorLetra     = Joi.string();

const idSchema       = Joi.object({
    id: id.required()
})

const sucursalesSchemaCreate = Joi.object({
    rut            : rut.required(), 
    razonSocial    : razonSocial.required(),         
    giro           : giro.required(), 
    direccion      : direccion.required(),     
    comuna_id      : comuna_id.required(),     
    nombre         : nombre.required(), 
    contactoEmail  : contactoEmail.required(),         
    contactoNombre : contactoNombre.required(),         
    colorFondo     : colorFondo.required(),     
    colorLetra     : colorLetra.required()     
})
const sucursalesSchemaUpdate = Joi.object({
    rut,
    razonSocial,
    giro,
    direccion,
    comuna_id,
    nombre,
    contactoEmail,
    contactoNombre,
    colorFondo,
    colorLetra,
    estado
});
const sucursalesSchemaDelete = Joi.object({
    estado: estado.required()
})

module.exports = {
    sucursalesSchemaCreate,
    sucursalesSchemaUpdate,
    sucursalesSchemaDelete,
    idSchema
}