// packages
const express                                 = require('express');
const router                                  = express.Router();
// imports & cons               
const control                                 = require('./responses');
const { cargoSchemaCreate, cargoSchemaUpdate} = require('./schemas');
const { idSchema, cargoSchemaDelete}          = require('./schemas');
const validatorHandler                        = require('../../utils/middlewares/validatorHandler');
const verifyToken                             = require('../../utils/middlewares/verifyToken');
// developer
router.get('/getall', control.cargosFindAll());
router.get('/getbyid/:id', validatorHandler(idSchema, 'params'), control.cargosFindById());
// admin
router.post('/create', verifyToken, validatorHandler(cargoSchemaCreate , 'body'), control.cargosCreate());
router.put('/update/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(cargoSchemaUpdate, 'body'), control.cargosUpdateById());
router.put('/delete/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(cargoSchemaDelete, 'body'), control.cargosDeleteById());
module.exports = router;
