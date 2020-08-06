// packages
const express                      = require('express');
const router                       = express.Router();
// imports & cons                                       
const control                      = require('./responses');
const { precioTortaSchema }        = require('./schemas/schemas');
const { sucursalSchema }           = require('./schemas/schemas');
const validatorHandler             = require('../../../utils/middlewares/validatorHandler');
const verifyToken                  = require('../../../utils/middlewares/verifyToken');

router.get('/getByStore',
     verifyToken, 
    validatorHandler(sucursalSchema, 'query'),
    control.precioTortaFindByStore());
router.post('/create',
     verifyToken, 
    validatorHandler(precioTortaSchema, 'body'),
    control.precioTortaUpdateOrCreate());
router.put('/update',
     verifyToken, 
    validatorHandler(precioTortaSchema, 'body'),
    control.precioTortaUpdateOrCreate());
module.exports = router;