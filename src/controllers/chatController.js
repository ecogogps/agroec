import Chat from '../models/chat.js';

export const sendMessage = async (req, res) => {
    try {
        const chat = await Chat.create(req.body);
        res.status(201).json(chat);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const getMessages = async (req, res) => {
    try {
        const chats = await Chat.findAll();
        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
