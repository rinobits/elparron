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
router.get('/getall', verifyToken, control.tamanoFindAll());
router.get('/getbyid/:id', verifyToken, validatorHandler(idSchema, 'params'), control.tamanoFindById());
// admin
router.post('/create', verifyToken, validatorHandler(tamanoSchemaCreate , 'body'), control.tamanoCreate());
router.put('/update/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(tamanoSchemaUpdate, 'body'), control.tamanoUpdateById());
router.put('/delete/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(tamanoSchemaDelete, 'body'), control.tamanoDeleteById());
module.exports = router;
