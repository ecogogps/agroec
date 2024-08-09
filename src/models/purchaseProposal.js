import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

const PurchaseProposal = sequelize.define('PurchaseProposal', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    unitId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    deliveryPresentation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    googleMapsLocation: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    schedules: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    validUntil: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    additionalInfo: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
});

export default PurchaseProposal;
