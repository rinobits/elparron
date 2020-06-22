module.exports = (sequelize, type) => {
    return sequelize.define('sucursales', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rut: {
            type: type.STRING,
            allowNull: false,
        },
        razonSocial: {
            type: type.STRING,
            allowNull: false,
        },
        giro: {
            type: type.STRING,
            allowNull: false,
        },
        direccion: {
            type: type.STRING,
            allowNull: false,
        },
        comuna_id:{
            type: type.INTEGER,
            allowNull: false
        },
        nombre: {
            type: type.STRING,
            allowNull: false,
        },
        contactoEmail: {
            type: type.STRING,
            allowNull: false,
        },
        contactoNombre: {
            type: type.STRING,
            allowNull: false,
        },
        colorFondo: {
            type: type.STRING,
            allowNull: false,
        },
        colorLetra: {
            type: type.STRING,
            allowNull: false,
        },
        estado:{
            type: type.INTEGER(1),
            defaultValue: 1
        }
        
    })
}
