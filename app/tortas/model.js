module.exports = (sequelize, type) => {
    const Torta = sequelize.define('torta', {
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
    });
/*     Tortas.associate = function(models) {
        Tortas.hasOne(models.masaTipos,  {foreignKey: 'masaTipo_id',  targetKey: 'nombre'});
        Tortas.hasOne(models.masaSabors, {foreignKey: 'masaSabor_id', targetKey: 'nombre'});
        Tortas.hasOne(models.sabores,    {foreignKey: 'sabor_id',     targetKey: 'nombre'});
    }; */
    return Torta;
}
