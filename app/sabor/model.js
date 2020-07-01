module.exports = (sequelize, type) => {
    const Sabores =  sequelize.define('sabores', {
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
    Sabores.associate = function(models) {
        Sabores.belongsTo(models.tortas, {foreignKey: 'sabor_id', as: 'sabor'})
    };
    return Sabores;
}
