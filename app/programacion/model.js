module.exports = (sequelize, type) => {
    const Programacion =  sequelize.define('Programacion', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dia: {
            type: type.INTEGER,
            allowNull: false
        },
        sucursal_id: {
            type: type.INTEGER,
            allowNull: false
        },
        torta_id: {
            type: type.INTEGER,
            allowNull:false
        },
        tamano_id:{
            type: type.INTEGER,
            allowNull: false
        },
        cantidad: {
            type: type.INTEGER,
            defaultValue: 0
        },
        estado: {
            type: type.INTEGER,
            defaultValue: 1
        }
    }, {  freezeTableName: true });
    return Programacion;
}