module.exports = function(sequelize, dataTypes) {
    let alias = 'Notas'

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        titulo: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        texto: {
            type: dataTypes.TEXT,
            allowNull: false
        }
    }

    let config = {
        tableName: 'notas',
        timestamps: true,
        underscored: true,
        paranoid: true
    }

    const Notas = sequelize.define(alias, cols, config);
    return Notas;
}
