import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const TaxiModel = db.define('Taxis', {
    ID_Taxi: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    NombreChofer: { type: DataTypes.STRING, allowNull: false },
    Placa: { type: DataTypes.STRING, allowNull: false },
    Estado: { type: DataTypes.STRING, allowNull: false },
    TipoVehiculo: { type: DataTypes.STRING },
    AsientosInfantiles: { type: DataTypes.STRING, allowNull: false }
}, {
    tableName: 'Taxis',
    freezeTableName: true,  
    timestamps: false
});

export default TaxiModel;
