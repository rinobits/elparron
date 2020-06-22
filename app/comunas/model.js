module.exports = (sequelize, type) => {
    return sequelize.define('comunas', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: type.STRING,
            ciudad: false
        },
        ciudad: {
            type: type.STRING,
            ciudad: false
        },
        estado: {
            type: type.INTEGER(1),
            defaultValue: 1
        }
    })
}
