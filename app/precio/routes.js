// packages
const express                                = require('express');
const router                                 = express.Router();
// imports & cons                                       
const control                                = require('./responses');
const { precioSchemaUpdate }                 = require('./schemas');
const { precioSchemaCreate }                 = require('./schemas');
const { idSchema, precioSchemaDelete }       = require('./schemas');
const validatorHandler                       = require('../../utils/middlewares/validatorHandler');
const verifyToken                            = require('../../utils/middlewares/verifyToken');
router.get('/getall',     
    verifyToken,
    control.precioFindAll());
router.get('/getbyid/:id',
    verifyToken,
    validatorHandler(idSchema, 'params'),
    control.precioFindById());
router.post('/create',
    verifyToken,
    validatorHandler(precioSchemaCreate, 'body'), control.precioCreate());
router.put('/update/:id',
    verifyToken,
    validatorHandler(idSchema, 'params'),
    validatorHandler(precioSchemaUpdate, 'body'),
    control.precioUpdateById());
router.put('/delete/:id', 
    verifyToken,
    validatorHandler(idSchema, 'params'),
    validatorHandler(precioSchemaDelete, 'body'),
    control.precioDeleteById());
module.exports = router;