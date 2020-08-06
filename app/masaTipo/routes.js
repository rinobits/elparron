// packages
const express                                         = require('express');
const router                                          = express.Router();
// imports & cons                       
const control                                         = require('./responses');
const { masaTipoSchemaCreate, masaTipoSchemaUpdate}   = require('./schemas');
const { idSchema, masaTipoSchemaDelete}               = require('./schemas');
const validatorHandler                                = require('../../utils/middlewares/validatorHandler');
const verifyToken                                     = require('../../utils/middlewares/verifyToken');
// developer
router.get('/getall',
    /* verifyToken, */
    control.masaTipoFindAll());
router.get('/getbyid/:id',
    /* verifyToken, */
    validatorHandler(idSchema, 'params'),
    control.masaTipoFindById());
// admin
router.post('/create',
    /* verifyToken, */
    validatorHandler(masaTipoSchemaCreate , 'body'),
    control.masaTipoCreateOrUpdateById());
router.put('/update/:id',
    /* verifyToken, */
    validatorHandler(idSchema, 'params'),
    validatorHandler(masaTipoSchemaUpdate, 'body'),
    control.masaTipoCreateOrUpdateById());
router.put('/delete/:id',
    /* verifyToken, */
    validatorHandler(idSchema, 'params'),
    validatorHandler(masaTipoSchemaDelete, 'body'),
    control.masaTipoDeleteById());
    
module.exports = router;
