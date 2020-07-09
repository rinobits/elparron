module.exports = (sequelize, type) => {
    const MasaTipo  = require('../masaTipo/model');
    const MasaSabor = require('../masaSabor/model');
    const Sabor     = require('../sabor/model');
    const Torta = sequelize.define('Torta', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        masaTipo_id: {
            type: type.INTEGER,
            allowNull: false,
/*             references: {
                model: 'masaTipos',
                key:    'id'
            } */
        },
        masaSabor_id: {
            type: type.INTEGER,
            allowNull: false,
/*             references: {
                model: 'masaSabors',
                key:   'id'
            } */
        },
        sabor_id: {
            type: type.INTEGER,
            allowNull: false,
/*             references: {
                model: 'sabores',
                key:   'id'
            } */
        },
        estado: {
            type: type.INTEGER(1),
            defaultValue: 1
        },
    }, {  freezeTableName: true },);
    MasaTipo
        .hasMany(Torta, {foreignKey: 'masaTipo_id'});
    MasaSabor
        .hasMany(Torta, {foreignKey: 'masaSabor_id'});
    Sabor
        .hasMany(Torta, {foreignKey: 'sabor_id'});
    Torta.belongsTo(MasaTipo,  {foreignKey: 'masaTipo_id'});
    Torta.belongsTo(MasaSabor, {foreignKey: 'masaSabor_id'});
    Torta.belongsTo(Sabor,     {foreignKey: 'sabor_id'});
    return Torta;
}
