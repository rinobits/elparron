// packages
const express                        = require('express');
const router                         = express.Router();
// imports & cons                       
const control                        = require('./responses');
const { programacionSchemaUpdate }   = require('./schemas/joiSchema');
const { paramSchema }                = require('./schemas/joiSchema');
const { programacionSchemaCreate }   = require('./schemas/joiSchema');
const validatorHandler               = require('../../../utils/middlewares/validatorHandler');
const verifyToken                    = require('../../../utils/middlewares/verifyToken');

router.get('/diaysucursal',
    /* verifyToken, */
    validatorHandler(paramSchema, 'query'),
    control.programacionFindByDiaYsucursal());
router.get('/findall',
    /* verifyToken, */
    control.programacionFindAll());
router.put('/update',
    /* verifyToken, */
    validatorHandler(paramSchema, 'query'),
    validatorHandler(programacionSchemaUpdate, 'body'),
    control.programacionMultipleUpdate());
router.put('/emptyday',
    /* verifyToken, */
    validatorHandler(paramSchema, 'query'),
    control.programacionEmptyOneDay());
router.put('/emptyweek',
    /* verifyToken, */
    validatorHandler(paramSchema, 'query'),
    control.programacionEmptyWeek());
router.post('/create',
    /* verifyToken, */
    validatorHandler(paramSchema, 'query'),
    validatorHandler(programacionSchemaCreate, 'body'),
    control.programacionMultipleCreate());
 
module.exports = router;
