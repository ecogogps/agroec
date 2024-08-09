import Offer from '../models/offer.js';

export const getOffers = async (req, res) => {
    try {
        const offers = await Offer.findAll();
        res.status(200).json(offers);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const createOffer = async (req, res) => {
    try {
        const offer = await Offer.create(req.body);
        res.status(201).json(offer);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const updateOffer = async (req, res) => {
    const { id } = req.params;

    try {
        await Offer.update(req.body, { where: { id } });
        res.status(200).json({ message: 'Offer updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const deleteOffer = async (req, res) => {
    const { id } = req.params;

    try {
        await Offer.destroy({ where: { id } });
        res.status(200).json({ message: 'Offer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
