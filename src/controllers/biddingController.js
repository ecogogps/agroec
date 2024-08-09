import Bidding from '../models/bidding.js';

export const addBidding = async (req, res) => {
    try {
        const bidding = await Bidding.create(req.body);
        res.status(201).json(bidding);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const getBiddings = async (req, res) => {
    try {
        const biddings = await Bidding.findAll();
        res.status(200).json(biddings);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const updateBidding = async (req, res) => {
    const { id } = req.params;
    
    try {
        await Bidding.update(req.body, { where: { id } });
        res.status(200).json({ message: 'Bidding updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const deleteBidding = async (req, res) => {
    const { id } = req.params;
    
    try {
        await Bidding.destroy({ where: { id } });
        res.status(200).json({ message: 'Bidding deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
