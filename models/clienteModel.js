import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const ClienteModel = db.define('Clientes', {
    ID_Cliente: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: { type: DataTypes.STRING, allowNull: false },
    Correo: { type: DataTypes.STRING, allowNull: false },
    Telefono: { type: DataTypes.STRING }
}, {
    timestamps: false
});

export default ClienteModel;
