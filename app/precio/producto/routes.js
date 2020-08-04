// packages
const express                                = require('express');
const router                                 = express.Router();
// imports & cons                                       
const control                                = require('./responses');
const { precioProductoSchema }               = require('./schemas/schemas');
const { sucursalSchema, idSchema }           = require('./schemas/schemas');
const validatorHandler                       = require('../../../utils/middlewares/validatorHandler');
const verifyToken                            = require('../../../utils/middlewares/verifyToken');

router.get('/getbyStore',  
    /* verifyToken, */
    validatorHandler(sucursalSchema, 'query'),
    control.precioProductoFindByStore());
router.post('/create',
    /* verifyToken, */
    validatorHandler(precioProductoSchema, 'body'),
    control.precioProductoCreate());
router.put('/update',
    /* verifyToken, */
    validatorHandler(idSchema, 'params'),
    validatorHandler(precioProductoSchema, 'body'),
    control.precioProductoUpdate());
module.exports = router;