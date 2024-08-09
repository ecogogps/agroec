import Chat from '../models/chat.js';

const chatHandler = {
    saveMessage: async (room, message) => {
        try {
            await Chat.create({ room, message });
        } catch (error) {
            console.error('Error saving message:', error);
        }
    }
};

export default chatHandler;
