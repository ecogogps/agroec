import Chat from '../models/chat.js';

export const getMessages = async (req, res) => {
    try {
        const messages = await Chat.findAll();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
