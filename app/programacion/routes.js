// packages
const express                        = require('express');
const router                         = express.Router();
// imports & cons                       
const control                        = require('./responses');
const { programacionSchemaCreate }   = require('./schemas/joiSchema');
const { programacionSchemaUpdate }   = require('./schemas/joiSchema');
const { idSchema }                   = require('./schemas/joiSchema');
const { paramSchema }                = require('./schemas/joiSchema');
const validatorHandler               = require('../../utils/middlewares/validatorHandler');
const verifyToken                    = require('../../utils/middlewares/verifyToken');

router.get('/getall',        verifyToken, control.programacionFindAll());
router.get('/diaysucursal',  verifyToken, validatorHandler(paramSchema, 'params'), control.programacionFindByDiaYsucursal());
router.post('/create',       verifyToken, control.programacionMultipleCreate());
router.put('/update',        verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(programacionSchemaUpdate, 'body'), control.programacionMultipleUpdate());
router.put('/movetoend',     verifyToken, control.programacionEmptyCurrentWeek());
module.exports = router;
