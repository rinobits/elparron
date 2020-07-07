module.exports = (sequelize, type) => {
    const sabores =  sequelize.define('sabores', {
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
/*     sabores.associate = function(models) {
        sabores.belongsTo(models.tortas, {foreignKey: 'sabor_id', targetKey: 'nombre', as:'masaSabors'})
    }; */
    return sabores;
}
