module.exports = (sequelize, type) => {
    return sequelize.define('armar', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: type.STRING,
            allowNull: false
        },
        telefono: {
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
        descripcion:{
            type: type.STRING,
            allowNull:true
        },
        mensaje: {
            type: type.STRING,
            allowNull:true
        },
        valor: {
            type: type.INTEGER,
            allowNull: false
        },
        abono: {
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