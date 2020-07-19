module.exports = (sequelize, type) => {
    const Torta = sequelize.define('Torta', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        masaTipo_id: {
            type: type.INTEGER,
            allowNull: false,
        },
        masaSabor_id: {
            type: type.INTEGER,
            allowNull: false,
        },
        sabor_id: {
            type: type.INTEGER,
            allowNull: false,
        },
        estado: {
            type: type.INTEGER(1),
            defaultValue: 1
        },
    }, {  freezeTableName: true });
    return Torta;
}
