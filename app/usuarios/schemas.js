// packages
const Joi              = require('@hapi/joi');
// consts
const pattern          = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,32})");

// usuario
const userName         = Joi.string().min(3).max(30);
const userPassword     = Joi.string().regex(pattern).min(8).max(32);
const empleado_id      = Joi.number().min(0);
const estado           = Joi.number().min(0).max(1);
const id               = Joi.number().min(0);

const idShema          = Joi.object({
    id: id.required()
})
const userSchemaCreate = Joi.object({
    userName: userName.required(),
    userPassword: userPassword.required(),
    empleado_id: empleado_id.required(),
})

const userSchemaUpdate = Joi.object({
    userName,
    userPassword,
    empleado_id,
    estado
});
const userSchemaDelete = Joi.object({
    estado: estado.required()
})
module.exports = {
    userSchemaCreate,
    userSchemaUpdate,
    userSchemaDelete,
    idShema
}