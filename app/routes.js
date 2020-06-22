// packages
const express    = require('express');

// imports & consts 
const usuarios   = require('./usuarios/routes');
const armar      = require('./armar/routes')
const tamano     = require('./tamano/routes');
const tortas     = require('./tortas/routes');
const auth       = require('./auth/routes');
const sucursales = require('./sucursales/routes');
const sabor      = require('./sabor/routes');
const masaTipo   = require('./masaTipo/routes');
const masaSabor  = require('./masaSabor/routes');
const empleados  = require('./empleados/routes');
const cargos     = require('./cargos/routes');


const index = (app) => {
    const router = express.Router();
    app.use('/', router);
    router.use('/auth', auth);
    router.use('/usuarios', usuarios);
    router.use('/armar', armar);
    router.use('/tamano', tamano);
    router.use('/tortas', tortas);
    router.use('/sucursales', sucursales);
    router.use('/sabor', sabor);
    router.use('/masaTipo', masaTipo);
    router.use('/masaSabor', masaSabor);
    router.use('/empleados', empleados);
    router.use('/cargos', cargos);
}

module.exports = index;
