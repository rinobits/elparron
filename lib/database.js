// packages
const Sequelize                   = require('sequelize');
// imports & conts
const UsersModel                  = require('../app/usuarios/model');
const MasaSaborModel              = require('../app/masaSabor/model');
const MasaTipoModel               = require('../app/masaTipo/model');
const SaborModel                  = require('../app/sabor/model');
const SucursalesModel             = require('../app/sucursales/model');
const ComunaModel                 = require('../app/comunas/model');
const TortasModel                 = require('../app/tortas/model');
const TamanoModel                 = require('../app/tamano/model');
const ProgModel                   = require('../app/programacion/model')
const {config}                    = require('../config');
const {db, user, password, _host} = config;
const host                        = {host: _host,dialect: 'mysql'};
const sequelize                   = new Sequelize(db, user, password, host);
const Usuario                     = UsersModel(sequelize, Sequelize);
const MasaSabor                   = MasaSaborModel(sequelize, Sequelize);
const Comuna                      = ComunaModel(sequelize, Sequelize);
const MasaTipo                    = MasaTipoModel(sequelize, Sequelize);
const Sabor                       = SaborModel(sequelize, Sequelize);
const Sucursal                    = SucursalesModel(sequelize, Sequelize);
const Torta                       = TortasModel(sequelize, Sequelize);
const Tamano                      = TamanoModel(sequelize, Sequelize);
const Programacion                = ProgModel(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(() => {
        console.log("Sincronized tables");
});

module.exports = {
    Usuario,
    MasaSabor,
    MasaTipo,
    Sabor,
    Sucursal,
    Comuna,
    Torta,
    Tamano,
    Programacion
}