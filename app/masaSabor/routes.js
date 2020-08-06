// packages
const express                                         = require('express');
const router                                          = express.Router();
// imports & cons                       
const control                                         = require('./responses');
const { masaSaborSchemaCreate, masaSaborSchemaUpdate} = require('./schemas');
const { idSchema, masaSaborSchemaDelete}              = require('./schemas');
const validatorHandler                                = require('../../utils/middlewares/validatorHandler');
const verifyToken                                     = require('../../utils/middlewares/verifyToken');
// developer
router.get('/getall',
    /* verifyToken, */
    control.masaSaborFindAll());
router.get('/getbyid/:id',
    /* verifyToken, */
    validatorHandler(idSchema, 'params'),
    control.masaSaborFindById());
// admin
router.post('/create',   
    /* verifyToken, */
    validatorHandler(masaSaborSchemaCreate , 'body'),
    control.masaSaborCreateOrUpdateById());
router.put('/update/:id',
    /* verifyToken, */
    validatorHandler(idSchema, 'params'),
    validatorHandler(masaSaborSchemaUpdate, 'body'),
    control.masaSaborCreateOrUpdateById());
router.put('/delete/:id',
    /* verifyToken, */
    validatorHandler(idSchema, 'params'),
    validatorHandler(masaSaborSchemaDelete, 'body'),
    control.masaSaborDeleteById());
module.exports = router;
