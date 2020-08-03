// packages
const express                                = require('express');
const router                                 = express.Router();
// imports & cons                                       
const control                                = require('./responses');
const { precioTortaSchemaUpdate }            = require('./schemas');
const { precioTortaSchemaCreate }            = require('./schemas');
const { sucursalSchema, idSchema }           = require('./schemas');
const validatorHandler                       = require('../../../utils/middlewares/validatorHandler');
const verifyToken                            = require('../../../utils/middlewares/verifyToken');

router.get('/getByStore/:sucursal',
    verifyToken,
    validatorHandler(sucursalSchema, 'params'),
    control.precioTortaFindByStore());
router.post('/create',
    verifyToken,
    validatorHandler(precioTortaSchemaCreate, 'body'), control.precioTortaCreate());
router.put('/update/:id',
    verifyToken,
    validatorHandler(idSchema, 'params'),
    validatorHandler(precioTortaSchemaUpdate, 'body'),
    control.precioTortaUpdateById());
module.exports = router;