module.exports = (sequelize, type) => {
    const masaTipo = sequelize.define('masaTipo', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        estado: {
            type: type.INTEGER(1),
            defaultValue: 1
        }
    });
/*     masaTipos.associate = function(models) {
        masaTipos.belongsTo(models.tortas, {foreignKey: 'masaTipo_id', targetKey: 'nombre', as:'masaSabors'})
    }; */
    return masaTipo;
}
