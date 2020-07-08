// packages
const express    = require('express');

// imports & consts 
const usuarios   = require('./usuarios/routes');
const tamano     = require('./tamano/routes');
const tortas     = require('./tortas/routes');
const auth       = require('./usuarios/auth/routes');
const sucursales = require('./sucursales/routes');
const comunas    = require('./comunas/routes');
const sabor      = require('./sabor/routes');
const masaTipo   = require('./masaTipo/routes');
const masaSabor  = require('./masaSabor/routes');


const index = (app) => {
    const router = express.Router();
    app.use('/', router);
    router.use('/usuarios/validate', auth);
    router.use('/usuarios',          usuarios);
    router.use('/tamano',            tamano);
    router.use('/tortas',            tortas);
    router.use('/sucursales',        sucursales);
    router.use('/comunas',           comunas);
    router.use('/sabor',             sabor);
    router.use('/masaTipo',          masaTipo);
    router.use('/masaSabor',         masaSabor);
}

module.exports = index;
