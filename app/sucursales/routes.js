// packages
const express                                            = require('express');
const router                                             = express.Router();
// imports & cons                        
const control                                            = require('./responses');
const { sucursalesSchemaCreate, sucursalesSchemaUpdate } = require('./schemas');
const { idSchema, sucursalesSchemaDelete }               = require('./schemas');
const validatorHandler                                   = require('../../utils/middlewares/validatorHandler');
const verifyToken                                        = require('../../utils/middlewares/verifyToken');
// developer
router.get('/getall', verifyToken, control.sucursalesFindAll());
router.get('/getbyid/:id', verifyToken, validatorHandler(idSchema, 'params'), control.sucursalesDeleteById());
// admin
router.post('/create', verifyToken, validatorHandler(sucursalesSchemaCreate , 'body'), control.sucursalesCreate());
router.put('/update/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(sucursalesSchemaUpdate, 'body'), control.sucursalesUpdateById());
router.put('/delete/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(sucursalesSchemaDelete, 'body'), control.sucursalesDeleteById());
module.exports = router;
