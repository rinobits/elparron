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
router.get('/', control.armarFindAll());
router.get('/:id', validatorHandler(idSchema, 'params'), control.armarFindById());
// admin
router.post('/', verifyToken, validatorHandler(armarSchemaCreate, 'body'), control.armarCreate());
router.put('/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(armarSchemaUpdate, 'body'), control.armarFindById());
router.put('/:id', verifyToken, validatorHandler(idSchema, 'params'), validatorHandler(armarSchemaDelete, 'params'), control.armarDeleteById());

module.exports = router;