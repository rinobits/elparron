// packages
const express                                = require('express');
const router                                 = express.Router();
// imports & cons                                       
const control                                = require('./responses');
const { productoTipoSchemaUpdate }           = require('./schemas');
const { productoTipoSchemaCreate }           = require('./schemas');
const { idSchema, productoTipoSchemaDelete } = require('./schemas');
const validatorHandler                       = require('../../utils/middlewares/validatorHandler');
const verifyToken                            = require('../../utils/middlewares/verifyToken');
router.get('/getall',     
     /* verifyToken,  */
    control.productoTipoFindAll());
router.get('/getbyid/:id',
     /* verifyToken,  */
    validatorHandler(idSchema, 'params'),
    control.productoTipoFindById());
router.post('/create',
     /* verifyToken,  */
    validatorHandler(productoTipoSchemaCreate, 'body'),
    control.productoTipoCreateOrUpdateById());
router.put('/update/:id',
     /* verifyToken,  */
    validatorHandler(idSchema, 'params'),
    validatorHandler(productoTipoSchemaUpdate, 'body'),
    control.productoTipoCreateOrUpdateById());
router.put('/delete/:id', 
     /* verifyToken,  */
    validatorHandler(idSchema, 'params'),
    validatorHandler(productoTipoSchemaDelete, 'body'),
    control.productoTipoDeleteById());
module.exports = router;