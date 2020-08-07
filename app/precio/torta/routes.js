// packages
const express             = require('express');
const router              = express.Router();
// imports & cons                                       
const control             = require('./responses');
const { precioSchema }    = require('./schemas/schemas');
const { sucursalSchema }  = require('./schemas/schemas');
const validatorHandler    = require('../../../utils/middlewares/validatorHandler');
const verifyToken         = require('../../../utils/middlewares/verifyToken');

router.get('/getByStore',
    verifyToken, 
    validatorHandler(sucursalSchema, 'query'),
    control.precioFindByStore());
router.post('/create',
    verifyToken, 
    validatorHandler(precioSchema, 'body'),
    control.precioUpdateOrCreate());
router.put('/update',
    verifyToken, 
    validatorHandler(precioSchema, 'body'),
    control.precioUpdateOrCreate());
module.exports = router;