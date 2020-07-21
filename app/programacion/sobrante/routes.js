// packages
const express                        = require('express');
const router                         = express.Router();
// imports & cons                       
const control                        = require('./responses');
const { sobranteSchemaUpdate }       = require('./schemas/joiSchema');
const { paramSchema }                = require('./schemas/joiSchema');
const { sucursalSchema }             = require('./schemas/joiSchema');
const validatorHandler               = require('../../../utils/middlewares/validatorHandler');
const verifyToken                    = require('../../../utils/middlewares/verifyToken');
router.get('/diaysucursal',  verifyToken, validatorHandler(paramSchema, 'query'), control.sobranteFindByDiaYsucursal());
router.put('/update',        verifyToken, validatorHandler(sobranteSchemaUpdate, 'body'), control.sobranteMultipleUpdate());
router.put('/emptyday',      verifyToken, validatorHandler(paramSchema, 'query'), control.sobranteEmptyOneDay());
router.put('/emptyweek',     verifyToken, validatorHandler(sucursalSchema, 'query'), control.sobranteEmptyWeek());
module.exports = router; 