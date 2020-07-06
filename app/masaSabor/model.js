module.exports = (sequelize, type) => {
    const masaSabors = sequelize.define('masaSabors', {
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
    masaSabors.associate = function(models) {
        masaSabors.belongsTo(models.tortas,  {foreignKey: 'masaSabor_id', targetKey: 'nombre', as:'masaSabors'})
    };
    return masaSabors;
}
