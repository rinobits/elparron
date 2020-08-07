// packages
const express                                   = require('express');
const router                                    = express.Router();
// imports & cons                       
const control                                   = require('./responses');
const { opcionSchemaCreate, opcionSchemaUpdate} = require('./schemas');
const { idSchema, opcionSchemaDelete}           = require('./schemas');
const validatorHandler                          = require('../../utils/middlewares/validatorHandler');
const verifyToken                               = require('../../utils/middlewares/verifyToken');

// developer
router.get('/getall',
     verifyToken, 
    control.opcionFindAll());
router.get('/getbyid/:id',
     verifyToken, 
    validatorHandler(idSchema, 'params'),
    control.opcionFindById());
// admin
router.post('/create',
     verifyToken, 
    validatorHandler(opcionSchemaCreate , 'body'),
    control.opcionCreateOrUpdateById());
router.put('/update/:id',
     verifyToken, 
    validatorHandler(idSchema, 'params'),
    validatorHandler(opcionSchemaUpdate, 'body'),
    control.opcionCreateOrUpdateById());
router.put('/delete/:id',
     verifyToken, 
    validatorHandler(idSchema, 'params'),
    validatorHandler(opcionSchemaDelete, 'body'),
    control.opcionDeleteById());
    
module.exports = router;
