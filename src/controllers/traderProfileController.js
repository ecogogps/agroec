import TraderProfile from '../models/traderProfile.js';

export const getTraderProfile = async (req, res) => {
    const { id } = req.params;

    try {
        const profile = await TraderProfile.findByPk(id);
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const createTraderProfile = async (req, res) => {
    try {
        const profile = await TraderProfile.create(req.body);
        res.status(201).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const updateTraderProfile = async (req, res) => {
    const { id } = req.params;

    try {
        await TraderProfile.update(req.body, { where: { id } });
        res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const deleteTraderProfile = async (req, res) => {
    const { id } = req.params;

    try {
        await TraderProfile.destroy({ where: { id } });
        res.status(200).json({ message: 'Profile deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
