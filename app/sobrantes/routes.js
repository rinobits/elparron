// packages
const express                        = require('express');
const router                         = express.Router();
// imports & cons                       
const control                        = require('./responses');
const { programacionSchemaUpdate }   = require('./schemas/joiSchema');
const { paramSchema }                = require('./schemas/joiSchema');
const { sucursalSchema }             = require('./schemas/joiSchema');
const validatorHandler               = require('../../utils/middlewares/validatorHandler');
const verifyToken                    = require('../../utils/middlewares/verifyToken');

router.get('/diaysucursal',      verifyToken, validatorHandler(paramSchema, 'query'), control.programacionFindByDiaYsucursal());
router.put('/update',            verifyToken, validatorHandler(programacionSchemaUpdate, 'body'), control.programacionMultipleUpdate());
router.put('/emptyday',          verifyToken, validatorHandler(paramSchema, 'query'), control.programacionEmptyOneDay());
router.put('/emptyweek',         verifyToken, validatorHandler(sucursalSchema, 'query'), control.programacionEmptyWeek());
router.delete('/deletesucursal', verifyToken, validatorHandler(sucursalSchema, 'query'), control.programacionDeleteSucursal());
router.post('/createsucursal',   verifyToken, validatorHandler(sucursalSchema, 'body'), control.programacionCreateSucursal());
module.exports = router;