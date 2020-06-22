// packages
const express                                   = require('express');
const router                                    = express.Router();
// imports & cons                       
const control                                   = require('./responses');
const { tamanoSchemaCreate, tamanoSchemaUpdate} = require('./schemas');
const { idSchema, tamanoSchemaDelete}           = require('./schemas');
const validatorHandler                          = require('../../utils/middlewares/validatorHandler');
const verifyToken                               = require('../../utils/middlewares/verifyToken');
// developer
router.get('/getall', control.tamanosFindAll());
router.get('/getbyid/:id', validatorHandler(idSchema, 'params'), control.tamanosFindById());
// admin
router.post('/create', verifyToken, validatorHandler(tamanoSchemaCreate , 'body'), control.tamanosCreate());
router.put('/update/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(tamanoSchemaUpdate, 'body'), control.tamanosUpdateById());
router.put('/delete/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(tamanoSchemaDelete, 'body'), control.tamanosDeleteById());
module.exports = router;
