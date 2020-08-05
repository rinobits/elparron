// packages
const express                      = require('express');
const router                       = express.Router();
// imports & cons                                       
const control                      = require('./responses');
const { precioProductoSchema }     = require('./schemas/schemas');
const { sucursalSchema }           = require('./schemas/schemas');
const validatorHandler             = require('../../../utils/middlewares/validatorHandler');
const verifyToken                  = require('../../../utils/middlewares/verifyToken');

router.get('/getByStore',
    verifyToken,
    validatorHandler(sucursalSchema, 'query'),
    control.precioProductoFindByStore());
router.post('/create',
    verifyToken,
    validatorHandler(precioProductoSchema, 'body'),
    control.precioProductoUpdateOrCreate());
router.put('/update',
    verifyToken,
    validatorHandler(precioProductoSchema, 'body'),
    control.precioProductoUpdateOrCreate());
module.exports = router;