module.exports = (sequelize, type) => {
    const Tortas = sequelize.define('tortas', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        masaTipo_id: {
            type: type.INTEGER,
            allowNull: false,
            unique: true,
/*             references: {
                model: 'masaTipos',
                key:    'id'
            } */
        },
        masaSabor_id: {
            type: type.INTEGER,
            allowNull: false,
            unique: true,
/*             references: {
                model: 'masaSabors',
                key:   'id'
            } */
        },
        sabor_id: {
            type: type.INTEGER,
            allowNull: false,
            unique: true,
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
    return Tortas;
}