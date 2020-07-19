// packages
const express                                         = require('express');
const router                                          = express.Router();
// imports & cons                       
const control                                         = require('./responses');
const { tortasSchemaCreate, tortasSchemaUpdate}       = require('./schemas');
const { idSchema, tortasSchemaDelete}                 = require('./schemas');
const validatorHandler                                = require('../../utils/middlewares/validatorHandler');
const verifyToken                                     = require('../../utils/middlewares/verifyToken');
// developer
router.get('/getall', verifyToken, control.tortasFindAll());
router.get('/getbyid/:id', verifyToken, validatorHandler(idSchema, 'params'), control.tortasFindById());
// admin
router.post('/create', verifyToken, validatorHandler(tortasSchemaCreate , 'body'), control.tortasCreate());
router.put('/update/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(tortasSchemaUpdate, 'body'), control.tortasUpdateById());
router.put('/delete/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(tortasSchemaDelete, 'body'), control.tortasDeleteById());
module.exports = router;
