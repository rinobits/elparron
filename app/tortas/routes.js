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
router.get('/getall', control.tortasFindAll());
router.get('/getbyid/:id', validatorHandler(idSchema, 'params'), control.tortasFindById());
// admin
router.post('/create', verifyToken, validatorHandler(tortaSchemaCreate , 'body'), control.tortasCreate());
router.put('/update/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(tortaSchemaUpdate, 'body'), control.tortasUpdateById());
router.put('/delete/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(tortaSchemaDelete, 'body'), control.tortasDeleteById());
module.exports = router;
