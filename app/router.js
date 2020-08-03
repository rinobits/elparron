// packages
const express    = require('express');

// imports & consts 
const usuario               = require('./usuario/routes');
const tamano                = require('./tamano/routes');
const tortas                = require('./tortas/routes');
const auth                  = require('./usuario/auth/routes');
const sucursal              = require('./sucursal/routes');
const comuna                = require('./comuna/routes');
const sabor                 = require('./sabor/routes');
const masaTipo              = require('./masaTipo/routes');
const masaSabor             = require('./masaSabor/routes');
const precioProducto        = require('./precio/producto/routes');
const precioTorta           = require('./precio/torta/routes');
const producto              = require('./producto/routes');
const productoTipo          = require('./productoTipo/routes');
const programacionDiaria    = require('./programacion/diaria/routes');
const programacionSemanal   = require('./programacion/semanal/routes');
const programacionSobrantes = require('./programacion/sobrante/routes');

const index = (app) => {
    const router = express.Router();
    app.use('/', router);
    router.use('/usuario/validate',       auth);
    router.use('/usuario',                usuario);
    router.use('/tamano',                 tamano);
    router.use('/tortas',                 tortas);
    router.use('/sucursal',               sucursal);
    router.use('/comuna',                 comuna);
    router.use('/sabor',                  sabor);
    router.use('/masaTipo',               masaTipo);
    router.use('/masaSabor',              masaSabor);
    router.use('/producto',               producto);
    router.use('/productoTipo',           productoTipo);
    router.use('/precio/producto',        precioProducto);
    router.use('/precio/torta',           precioTorta);
    router.use('/programacion/diaria',    programacionDiaria);
    router.use('/programacion/semanal',   programacionSemanal);
    router.use('/programacion/sobrante',  programacionSobrantes);
}
module.exports = index;
