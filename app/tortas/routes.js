// packages
const express                                         = require('express');
const router                                          = express.Router();
// imports & cons                       
const control                                         = require('./responses');
const { tortaSchemaCreate, tortaSchemaUpdate}       = require('./schemas');
const { idSchema, tortaSchemaDelete}                 = require('./schemas');
const validatorHandler                                = require('../../utils/middlewares/validatorHandler');
const verifyToken                                     = require('../../utils/middlewares/verifyToken');
// developer
router.get('/getall', verifyToken, control.tortaFindAll());
router.get('/getbyid/:id', verifyToken, validatorHandler(idSchema, 'params'), control.tortaFindById());
// admin
router.post('/create', verifyToken, validatorHandler(tortaSchemaCreate , 'body'), control.tortaCreate());
router.put('/update/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(tortaSchemaUpdate, 'body'), control.tortaUpdateById());
router.put('/delete/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(tortaSchemaDelete, 'body'), control.tortaDeleteById());
module.exports = router;
