// packages
const express                                 = require('express');
const router                                  = express.Router();
// imports                                           
const control                                 = require('./responses');
const { armarSchemaCreate, armarSchemaUpdate} = require('./schemas');
const { armarSchemaDelete, idSchema}          = require('./schemas');
const validatorHandler                        = require('../../utils/middlewares/validatorHandler');
const verifyToken                             = require('../../utils/middlewares/verifyToken');

// developer
router.get('/getall/', control.armarFindAll());
router.get('/getbyid/:id', validatorHandler(idSchema, 'params'), control.armarFindById());
// admin
router.post('/create', verifyToken, validatorHandler(armarSchemaCreate, 'body'), control.armarCreate());
router.put('/update/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(armarSchemaUpdate, 'body'), control.armarUpdateById());
router.put('/delete/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(armarSchemaDelete, 'body'), control.armarDeleteById());

module.exports = router;