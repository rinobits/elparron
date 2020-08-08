// packages
const express                                            = require('express');
const router                                             = express.Router();
// imports & cons                        
const control                                            = require('./responses');
const { sucursalSchemaCreate, sucursalSchemaUpdate }     = require('./schemas');
const { idSchema, sucursalSchemaDelete }                 = require('./schemas');
const validatorHandler                                   = require('../../utils/middlewares/validatorHandler');
const verifyToken                                        = require('../../utils/middlewares/verifyToken');
// developer
router.get('/getall',
     /* verifyToken,  */
    control.sucursalFindAll());
router.get('/getbyid/:id',
     /* verifyToken,  */
    validatorHandler(idSchema, 'params'),
    control.sucursalFindById());
// admin
router.post('/create',
     /* verifyToken,  */
    validatorHandler(sucursalSchemaCreate , 'body'),
    control.sucursalCreate());
router.put('/update/:id',
     /* verifyToken,  */
    validatorHandler(idSchema, 'params'),
    validatorHandler(sucursalSchemaUpdate, 'body'),
    control.sucursalUpdateById());
router.put('/delete/:id',
     /* verifyToken,  */
    validatorHandler(idSchema, 'params'),
    validatorHandler(sucursalSchemaDelete, 'body'),
    control.sucursalDeleteById());
    
module.exports = router;
