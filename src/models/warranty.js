import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

const Warranty = sequelize.define('Warranty', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    warranty: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    refund: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    }
});

export default Warranty;
