// packages
const express                                = require('express');
const router                                 = express.Router();
// imports & cons                                       
const control                                = require('./responses');
const { usuarioSchemaUpdate }                = require('./schemas');
const { usuarioSchemaCreate }                = require('./schemas');
const { idSchema, usuarioSchemaDelete }      = require('./schemas');
const validatorHandler                       = require('../../utils/middlewares/validatorHandler');
const verifyToken                            = require('../../utils/middlewares/verifyToken');


router.get('/getall',     
     verifyToken,  
    control.usuarioFindAll());
router.get('/getbyid/:id',
     verifyToken,  
    validatorHandler(idSchema, 'params'),
    control.usuarioFindById());

router.post('/create',    
     verifyToken,  
    validatorHandler(usuarioSchemaCreate, 'body'),
    control.usuarioUpdateOrCreateById());
router.put('/update/:id', 
     verifyToken,  
    validatorHandler(idSchema, 'params'),
    validatorHandler(usuarioSchemaUpdate, 'body'),
    control.usuarioUpdateOrCreateById());
router.put('/delete/:id', 
     verifyToken,  
    validatorHandler(idSchema, 'params'),
    validatorHandler(usuarioSchemaDelete, 'body'),
    control.usuarioDeleteById());

module.exports = router;
