module.exports = (sequelize, type) => {
    return sequelize.define('empleados', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rut: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        nombres: {
            type: type.STRING,
            allowNull: false
        },
        apellidoPaterno: {
            type: type.STRING,
            allowNull: false
        },
        apellidoMaterno: {
            type: type.STRING,
            allowNull: false
        },
        cargo_id: {
            type: type.INTEGER,
            allowNull: false
        },
        email: {
            type: type.STRING(255),
            allowNull: false
        },
        estado: {
            type: type.INTEGER(1),
            defaultValue: 1
        }
    })
}
