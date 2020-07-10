module.exports = (sequelize, type) => {
    const Sabor =  sequelize.define('Sabor', {
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
    }, {  freezeTableName: true });
    return Sabor;
}
