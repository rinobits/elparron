module.exports = (sequelize, type) => {
    const MasaSabor = sequelize.define('masasabor', {
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
    MasaSabor.associate = function(models) {
        MasaSabor.belongsTo(models.tortas, {foreignKey: 'masaSabor_id', as: 'masasabor'})
    };
    return MasaSabor;
}
