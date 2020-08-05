// packages
const express                                = require('express');
const router                                 = express.Router();
// imports & cons                                       
const control                                = require('./responses');
const { productoSchemaUpdate }               = require('./schemas');
const { productoSchemaCreate }               = require('./schemas');
const { idSchema, productoSchemaDelete }     = require('./schemas');
const validatorHandler                       = require('../../utils/middlewares/validatorHandler');
const verifyToken                            = require('../../utils/middlewares/verifyToken');
router.get('/getall',     
    verifyToken,
    control.productoFindAll());
router.get('/getbyid/:id',
    verifyToken,
    validatorHandler(idSchema, 'params'),
    control.productoFindById());
router.post('/create',
    verifyToken,
    validatorHandler(productoSchemaCreate, 'body'),
    control.productoCreate());
router.put('/update/:id',
    verifyToken,
    validatorHandler(idSchema, 'params'),
    validatorHandler(productoSchemaUpdate, 'body'),
    control.productoUpdateById());
router.put('/delete/:id', 
    verifyToken,
    validatorHandler(idSchema, 'params'),
    validatorHandler(productoSchemaDelete, 'body'),
    control.productoDeleteById());
module.exports = router;