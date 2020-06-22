// packages
const express                                         = require('express');
const router                                          = express.Router();
// imports & cons                       
const control                                         = require('./responses');
const { empleadoSchemaCreate, empleadoSchemaUpdate} = require('./schemas');
const { idSchema, empleadoSchemaDelete}              = require('./schemas');
const validatorHandler                                = require('../../utils/middlewares/validatorHandler');
const verifyToken                                     = require('../../utils/middlewares/verifyToken');
// developer
router.get('/getall', control.empleadosFindAll());
router.get('/getbyid/:id', validatorHandler(idSchema, 'params'), control.empleadosFindById());
// admin
router.post('/create', verifyToken, validatorHandler(empleadoSchemaCreate , 'body'), control.empleadosCreate());
router.put('/update/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(empleadoSchemaUpdate, 'body'), control.empleadosUpdateById());
router.put('/delete/:id', verifyToken, /* validatorHandler(idSchema, 'params'), validatorHandler(empleadoSchemaDelete, 'body'), */ control.empleadosDeleteById());
module.exports = router;
