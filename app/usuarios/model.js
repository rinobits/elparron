module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        userPassword: {
            type: type.STRING(255),
            allowNull: false
        },
        empleado_id: {
            type:type.INTEGER,
            allowNull: false
        },
        estado:{
            type: type.INTEGER(1),
            defaultValue: 1
        }
    })
}
