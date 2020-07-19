module.exports = (sequelize, type) => {
    const Tamano = sequelize.define('tamano', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tamano: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        personas: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        estado: {
            type: type.INTEGER(1),
            defaultValue: 1
        }
    }, {  freezeTableName: true });
    return Tamano;
}
