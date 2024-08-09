import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

const ProductInterest = sequelize.define('ProductInterest', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    unitId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    qualityParams: {
        type: DataTypes.JSONB,
        allowNull: true,
    },
    penaltyTable: {
        type: DataTypes.JSONB,
        allowNull: true,
    }
});

export default ProductInterest;
