// packages
const Sequelize                   = require('sequelize');
// imports & conts
const UsersModel                  = require('../app/usuarios/model');
const EmpleadosModel              = require('../app/empleados/model');
const CargosModel                 = require('../app/cargos/model');
const MasaSaborModel              = require('../app/masaSabor/model');
const MasaTipoModel               = require('../app/masaTipo/model');
const SaborModel                  = require('../app/sabor/model');
const SucursalesModel             = require('../app/sucursales/model');
const TortasModel                 = require('../app/tortas/model');
const TamanoModel                 = require('../app/tamano/model');
const ArmarModel                  = require('../app/armar/model');
const {config}                    = require('../config');
const {db, user, password, _host} = config;
const host                        = {host: _host,dialect: 'mysql'};
const sequelize                   = new Sequelize(db, user, password, host);
const Users                       = UsersModel(sequelize, Sequelize);
const Empleados                   = EmpleadosModel(sequelize, Sequelize);
const Cargos                      = CargosModel(sequelize, Sequelize);
const MasaSabor                   = MasaSaborModel(sequelize, Sequelize);
const MasaTipo                    = MasaTipoModel(sequelize, Sequelize);
const Sabores                     = SaborModel(sequelize, Sequelize);
const Sucursales                  = SucursalesModel(sequelize, Sequelize);
const Tortas                      = TortasModel(sequelize, Sequelize);
const Tamanos                     = TamanoModel(sequelize, Sequelize);
const Armar                       = ArmarModel(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(() =>{
        console.log("Sincronized tables");
});

module.exports = {
    Users,
    Empleados,
    Cargos,
    MasaSabor,
    MasaTipo,
    Sabores,
    Sucursales,
    Tortas,
    Tamanos,
    Armar
}












































































