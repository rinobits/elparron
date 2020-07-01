module.exports = (sequelize, type) => {
    const MasaTipo = sequelize.define('masaTipo', {
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
    }, {});
    MasaTipo.associate = function(models) {
        MasaTipo.belongsTo(models.tortas, {foreignKey: 'masaTipo_id', as: 'masatipo'})
    };
    return MasaTipo;
}
