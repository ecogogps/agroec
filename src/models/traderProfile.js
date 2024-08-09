import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

const TraderProfile = sequelize.define('TraderProfile', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    products: {
        type: DataTypes.JSONB,
        allowNull: true,
    }
});

export default TraderProfile;
