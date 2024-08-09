import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

const SaleProposal = sequelize.define('SaleProposal', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    qualityParams: {
        type: DataTypes.JSONB,
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

export default SaleProposal;
