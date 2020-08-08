// packages
const express                   = require('express');
const router                    = express.Router();
// imports & cons                                       
const control                   = require('./responses');
const { precioTortaSchema }     = require('./schemas/JoiTorta');
const { precioProductoSchema }  = require('./schemas/JoiProducto');
const { sucursalSchema }        = require('./schemas/JoiProducto');
const validatorHandler          = require('../../utils/middlewares/validatorHandler');
const verifyToken               = require('../../utils/middlewares/verifyToken');

router.get('/getByStore',
    /* verifyToken,  */
    validatorHandler(sucursalSchema, 'query'),
    control.precioFindByStore());
router.post('/create',
    /* verifyToken,  */
    control.precioUpdateOrCreate());
router.put('/update',
    /* verifyToken,  */
    control.precioUpdateOrCreate());
module.exports = router;