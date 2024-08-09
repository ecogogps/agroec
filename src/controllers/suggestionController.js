import Suggestion from '../models/suggestion.js';

export const suggestProduct = async (req, res) => {
    try {
        const suggestion = await Suggestion.create(req.body);
        res.status(201).json(suggestion);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
