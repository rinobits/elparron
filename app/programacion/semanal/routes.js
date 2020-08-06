// packages
const express                             = require('express');
const router                              = express.Router();
// imports & cons                       
const control                             = require('./responses');
const { programacionSemanalSchemaUpdate } = require('./schemas/joiSchema');
const { programacionSemanalSchemaCreate } = require('./schemas/joiSchema');
const { paramSchema }                     = require('./schemas/joiSchema');

const validatorHandler                    = require('../../../utils/middlewares/validatorHandler');
const verifyToken                         = require('../../../utils/middlewares/verifyToken');

router.get('/diaysucursal',
    /* verifyToken, */ 
    validatorHandler(paramSchema, 'query'),
    control.programacionSemanalFindByDiaYsucursal());
router.put('/update',
    /* verifyToken, */ 
    validatorHandler(paramSchema, 'query'),
    validatorHandler(programacionSemanalSchemaUpdate, 'body'),
    control.programacionSemanalMultipleUpdate());
router.post('/create',
    /* verifyToken, */ 
    validatorHandler(paramSchema, 'query'),
    validatorHandler(programacionSemanalSchemaCreate, 'body'),
    control.programacionSemanalMultipleCreate());
    
module.exports = router;
