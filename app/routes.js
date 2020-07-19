// packages
const express    = require('express');

// imports & consts 
const usuario       = require('./usuario/routes');
const tamano        = require('./tamano/routes');
const tortas        = require('./tortas/routes');
const auth          = require('./usuario/auth/routes');
const sucursal      = require('./sucursal/routes');
const comuna        = require('./comuna/routes');
const sabor         = require('./sabor/routes');
const masaTipo      = require('./masaTipo/routes');
const masaSabor     = require('./masaSabor/routes');
const programacion  = require('./programacion/routes');

const index = (app) => {
    const router = express.Router();
    app.use('/', router);
    router.use('/usuario/validate',  auth);
    router.use('/usuario',           usuario);
    router.use('/tamano',            tamano);
    router.use('/tortas',            tortas);
    router.use('/sucursal',          sucursal);
    router.use('/comuna',            comuna);
    router.use('/sabor',             sabor);
    router.use('/masaTipo',          masaTipo);
    router.use('/masaSabor',         masaSabor);
    router.use('/programacion',      programacion);
}

module.exports = index;
