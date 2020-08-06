// packages
const express                                         = require('express');
const router                                          = express.Router();
// imports & cons                       
const control                                         = require('./responses');
const { comunaSchemaCreate, comunaSchemaUpdate}       = require('./schemas');
const { idSchema, comunaSchemaDelete}                 = require('./schemas');
const validatorHandler                                = require('../../utils/middlewares/validatorHandler');
const verifyToken                                     = require('../../utils/middlewares/verifyToken');
// developer
router.get('/getall',
    /* verifyToken, */
    control.comunaFindAll());
router.get('/getbyid/:id',
    /* verifyToken, */
    validatorHandler(idSchema, 'params'),
    control.comunaFindById());
// admin
router.post('/create',
    /* verifyToken, */
    validatorHandler(comunaSchemaCreate , 'body'),
    control.comunaCreateOrUpdateById());
router.put('/update/:id',
    /* verifyToken, */
    validatorHandler(idSchema, 'params'),
    validatorHandler(comunaSchemaUpdate, 'body'),
    control.comunaCreateOrUpdateById());
router.put('/delete/:id',
    /* verifyToken, */
    validatorHandler(idSchema, 'params'),
    validatorHandler(comunaSchemaDelete, 'body'),
    control.comunaDeleteById());
    
module.exports = router;
