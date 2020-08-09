// packages
const express                                         = require('express');
const router                                          = express.Router();
// imports & cons                       
const control                                         = require('./responses');
const { saborSchemaCreate, saborSchemaUpdate}         = require('./schemas');
const { idSchema, saborSchemaDelete}                  = require('./schemas');
const validatorHandler                                = require('../../utils/middlewares/validatorHandler');
const verifyToken                                     = require('../../utils/middlewares/verifyToken');

router.get('/getall',
     verifyToken, 
    control.saborFindAll());
router.get('/getbyid/:id',
     verifyToken, 
    validatorHandler(idSchema, 'params'),
    control.saborFindById());

router.post('/create',
     verifyToken, 
    validatorHandler(saborSchemaCreate , 'body'),
    control.saborCreateOrUpdateById());
router.put('/update/:id',
     verifyToken, 
    validatorHandler(idSchema, 'params'),
    validatorHandler(saborSchemaUpdate, 'body'),
    control.saborCreateOrUpdateById());
router.put('/delete/:id',
     verifyToken, 
    validatorHandler(idSchema, 'params'),
    validatorHandler(saborSchemaDelete, 'body'),
    control.saborDeleteById());
module.exports = router;
