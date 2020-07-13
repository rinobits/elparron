// packages
const express                      = require('express');
const router                       = express.Router();
// imports & cons                       
const control                      = require('./responses');
const { programacionSchemaCreate } = require('./schemas');
const { programacionSchemaUpdate } = require('./schemas');
const { programacionSchemaDelete } = require('./schemas')
const { idSchema }                 = require('./schemas');
const validatorHandler             = require('../../utils/middlewares/validatorHandler');
const verifyToken                  = require('../../utils/middlewares/verifyToken');
// developer
router.get('/getall',      verifyToken, control.programacionFindAll());
router.get('/getbyid/:id', verifyToken, validatorHandler(idSchema, 'params'), control.programacionFindById());
// admin
router.post('/create',     verifyToken, validatorHandler(programacionSchemaCreate , 'body'), control.programacionCreate());
router.put('/update/:id',  verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(programacionSchemaUpdate, 'body'), control.programacionUpdateById());
router.put('/delete/:id',  verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(programacionSchemaDelete, 'body'), control.programacionDeleteById());
module.exports = router;
