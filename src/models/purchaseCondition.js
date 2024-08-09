import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

const PurchaseCondition = sequelize.define('PurchaseCondition', {
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
    numDeliveries: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    deliveryDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    deliveryTime: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    qualityParams: {
        type: DataTypes.JSONB,
        allowNull: true,
    },
    paymentMode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    initialPercentage: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    finalPaymentMode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    finalPercentage: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    priceAtHome: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
});

export default PurchaseCondition;
