// packages
const express                                = require('express');
const router                                 = express.Router();
// imports & cons                                       
const control                                = require('./responses');
const { precioProductoSchemaUpdate }         = require('./schemas');
const { precioProductoSchemaCreate }         = require('./schemas');
const { sucursalSchema, idSchema }           = require('./schemas');
const validatorHandler                       = require('../../../utils/middlewares/validatorHandler');
const verifyToken                            = require('../../../utils/middlewares/verifyToken');

router.get('/getbyStore/:sucursal',     
    verifyToken,
    validatorHandler(sucursalSchema, 'params'),
    control.precioProductoFindByStore());
router.post('/create',
    verifyToken,
    validatorHandler(precioProductoSchemaCreate, 'body'),
    control.precioProductoCreate());
router.put('/update/:id',
    verifyToken,
    validatorHandler(idSchema, 'params'),
    validatorHandler(precioProductoSchemaUpdate, 'body'),
    control.precioProductoUpdateById());
module.exports = router;