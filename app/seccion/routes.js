// packages
const express                                     = require('express');
const router                                      = express.Router();
// imports & cons                            
const control                                     = require('./responses');
const { seccionSchemaCreate, seccionSchemaUpdate} = require('./schemas');
const { idSchema, seccionSchemaDelete}            = require('./schemas');
const validatorHandler                            = require('../../utils/middlewares/validatorHandler');
const verifyToken                                 = require('../../utils/middlewares/verifyToken');


router.get('/getall',
    verifyToken, 
    control.seccionFindAll());
router.get('/getbyid/:id',
    verifyToken, 
    validatorHandler(idSchema, 'params'),
    control.seccionFindById());

router.post('/create',
    verifyToken, 
    validatorHandler(seccionSchemaCreate , 'body'),
    control.seccionCreateOrUpdateById());
router.put('/update/:id',
    verifyToken, 
    validatorHandler(idSchema, 'params'),
    validatorHandler(seccionSchemaUpdate, 'body'),
    control.seccionCreateOrUpdateById());
router.put('/delete/:id',
    verifyToken, 
    validatorHandler(idSchema, 'params'),
    validatorHandler(seccionSchemaDelete, 'body'),
    control.seccionDeleteById());
    
module.exports = router;
