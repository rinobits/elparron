// packages
const express                        = require('express');
const router                         = express.Router();
// imports & cons                       
const control                        = require('./responses');
const { programacionDiariaSchemaUpdate }   = require('./schemas/joiSchema');
const { programacionDiariaSchemaCreate }   = require('./schemas/joiSchema');
const { paramSchema }                = require('./schemas/joiSchema');
const { sucursalSchema }             = require('./schemas/joiSchema');
const validatorHandler               = require('../../../utils/middlewares/validatorHandler');
const verifyToken                    = require('../../../utils/middlewares/verifyToken');

router.get('/diaysucursal',
     verifyToken, 
    validatorHandler(paramSchema, 'query'),
    control.programacionDiariaFindByDiaYsucursal());
router.get('/findall',
     verifyToken, 
    control.programacionDiariaFindAll());
router.put('/update',
     verifyToken, 
    validatorHandler(paramSchema, 'query'),
    validatorHandler(programacionDiariaSchemaUpdate, 'body'),
    control.programacionDiariaMultipleUpdate());
router.put('/emptyday',
     verifyToken, 
    validatorHandler(paramSchema, 'query'),
    control.programacionDiariaEmptyOneDay());
router.put('/emptyweek',
     verifyToken, 
    validatorHandler(sucursalSchema, 'query'),
    control.programacionDiariaEmptyWeek());
router.post('/create',
     verifyToken, 
    validatorHandler(paramSchema, 'query'),
    validatorHandler(programacionDiariaSchemaCreate, 'body'),
    control.programacionDiariaMultipleCreate());
 
module.exports = router;
