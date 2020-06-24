module.exports = (sequelize, type) => {
    return sequelize.define('armados', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        phone: {
            type: type.STRING,
            allowNull: false
        },
        torta_id: {
            type: type.INTEGER,
            allowNull: false
        },
        tamano_id: {
            type: type.INTEGER,
            allowNull: false
        },
        description:{
            type: type.STRING,
            allowNull:true
        },
        message: {
            type: type.STRING,
            allowNull:true
        },
        value: {
            type: type.INTEGER,
            allowNull: false
        },
        deposit: {
            type: type.INTEGER,
            allowNull: false
        },
        horaEntrega: {
            type: type.STRING,
            allowNull:false
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