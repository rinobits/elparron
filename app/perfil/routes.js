// packages
const express                                     = require('express');
const router                                      = express.Router();
// imports & cons                            
const control                                     = require('./responses');
const { perfilSchemaCreate, perfilSchemaUpdate} = require('./schemas');
const { idSchema, perfilSchemaDelete}            = require('./schemas');
const validatorHandler                            = require('../../utils/middlewares/validatorHandler');
const verifyToken                                 = require('../../utils/middlewares/verifyToken');

// developer
router.get('/getall',
     verifyToken, 
    control.perfilFindAll());
router.get('/getbyid/:id',
     verifyToken, 
    validatorHandler(idSchema, 'params'),
    control.perfilFindById());
// admin
router.post('/create',
     verifyToken, 
    validatorHandler(perfilSchemaCreate , 'body'),
    control.perfilCreateOrUpdateById());
router.put('/update/:id',
     verifyToken, 
    validatorHandler(idSchema, 'params'),
    validatorHandler(perfilSchemaUpdate, 'body'),
    control.perfilCreateOrUpdateById());
router.put('/delete/:id',
     verifyToken, 
    validatorHandler(idSchema, 'params'),
    validatorHandler(perfilSchemaDelete, 'body'),
    control.perfilDeleteById());
    
module.exports = router;
