// packages
const express                                         = require('express');
const router                                          = express.Router();
// imports & cons                       
const control                                         = require('./responses');
const { saborSchemaCreate, saborSchemaUpdate}         = require('./schemas');
const { idSchema, saborSchemaDelete}                  = require('./schemas');
const validatorHandler                                = require('../../utils/middlewares/validatorHandler');
const verifyToken                                     = require('../../utils/middlewares/verifyToken');
// developer
router.get('/getall', control.saboresFindAll());
router.get('/getbyid/:id', validatorHandler(idSchema, 'params'), control.saboresFindById());
// admin
router.post('/create', verifyToken, validatorHandler(saborSchemaCreate , 'body'), control.saboresCreate());
router.put('/update/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(saborSchemaUpdate, 'body'), control.saboresUpdateById());
router.put('/delete/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(saborSchemaDelete, 'body'), control.saboresDeleteById());
module.exports = router;
