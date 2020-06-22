module.exports = (sequelize, type) => {
    return sequelize.define('armados', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        torta_id: {
            type: type.INTEGER,
            allowNull: false
        },
        tamano_id: {
            type: type.INTEGER,
            allowNull: false
        },
        imagen: {
            type: type.TEXT,
            allowNull:true
        },
        estado: {
            type: type.INTEGER(1),
            defaultValue: 1
        }
    })
}