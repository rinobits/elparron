// packages
const express                        = require('express');
const router                         = express.Router();
// imports & cons                       
const control                        = require('./responses');
const { programacionSchemaCreate }   = require('./schemas/programacion');
const { programacionSchemaUpdate }   = require('./schemas/programacion');
const { idSchema }                   = require('./schemas/programacion');
const { paramSchema }                = require('./schemas/programacion');
const validatorHandler               = require('../../utils/middlewares/validatorHandler');
const verifyToken                    = require('../../utils/middlewares/verifyToken');
// developer
router.get('/getall',        verifyToken, control.programacionFindAll());
router.get('/diaysucursal',  verifyToken, validatorHandler(paramSchema, 'params'), control.programacionFindByDiaYsucursal());
// admin
router.post('/create',       verifyToken, validatorHandler(programacionSchemaCreate , 'body'), control.programacionMultipleCreate());
router.put('/update',        verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(programacionSchemaUpdate, 'body'), control.programacionMultipleUpdate());
module.exports = router;
