module.exports = (sequelize, type) => {
    return sequelize.define('tortas', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        masaTipo_id: {
            type: type.INTEGER,
            allowNull: false,
            references: {
                model: 'masaTipos',
                key:    'id'
            }
        },
        masaSabor_id: {
            type: type.INTEGER,
            allowNull: false,
            references: {
                model: 'masaSabors',
                key:   'id'
            }
        },
        sabor_id: {
            type: type.INTEGER,
            allowNull: false,
            references: {
                model: 'sabores',
                key:   'id'
            }
        },
        estado: {
            type: type.INTEGER(1),
            defaultValue: 1
        }
    }, {});
}