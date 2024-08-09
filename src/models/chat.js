import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

const Chat = sequelize.define('Chat', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    buyer: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    pushNotification: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    }
});

export default Chat;
