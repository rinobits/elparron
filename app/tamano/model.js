module.exports = (sequelize, type) => {
    return sequelize.define('tamanos', {
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
    })
}
