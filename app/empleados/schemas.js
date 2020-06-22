// packages
const Joi              = require('@hapi/joi');
// consts
const pattern          = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,32})");
const rut              = Joi.string().min(8).max(12);
const nombres          = Joi.string();
const apell_idoPaterno = Joi.string();
const apell_idoMaterno = Joi.string();
const cargo_id         = Joi.number().min(0);
const email            = Joi.string().email();
const estado           = Joi.number().min(0).max(1);
const id               = Joi.number().min(0);

const idShema         = Joi.object({
    id: id.required()
})
const empleadosSchemaCreate = Joi.object({
    rut:             rut.required(),
    nombres:         nombres.required(),
    apellidoPaterno: apell_idoPaterno.required(),
    apellidoMaterno: apell_idoMaterno.required(),
    cargo_id:        cargo_id.required(),
    email:           email.required()
})

const empleadosSchemaUpdate = Joi.object({
    rut,
    nombres,
    apellidoPaterno,
    apellidoMaterno,
    cargo_id,
    email,
    estado
});
const empleadosSchemaDelete = Joi.object({
    estado: estado.required()
})
module.exports = {
    empleadosSchemaCreate,
    empleadosSchemaUpdate,
    empleadosSchemaDelete,
    idShema
}