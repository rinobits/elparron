module.exports = (sequelize, type) => {
    return sequelize.define('tortas', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        masaTipo_id: {
            type: type.STRING,
            allowNull: false
        },
        masaSabor_id: {
            type: type.STRING,
            allowNull: false
        },
        sabor_id: {
            type: type.STRING,
            allowNull: false
        },
        estado: {
            type: type.INTEGER(1),
            defaultValue: 1
        }
    })
}