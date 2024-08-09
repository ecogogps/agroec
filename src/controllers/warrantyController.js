import Warranty from '../models/warranty.js';

export const payWarranty = async (req, res) => {
    try {
        const warranty = await Warranty.create(req.body);
        res.status(201).json(warranty);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
