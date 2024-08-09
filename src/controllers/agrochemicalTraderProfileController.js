import AgrochemicalTraderProfile from '../models/agrochemicalTraderProfile.js';

export const getAgrochemicalTraderProfile = async (req, res) => {
    const { id } = req.params;

    try {
        const profile = await AgrochemicalTraderProfile.findByPk(id);
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const createAgrochemicalTraderProfile = async (req, res) => {
    try {
        const profile = await AgrochemicalTraderProfile.create(req.body);
        res.status(201).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const updateAgrochemicalTraderProfile = async (req, res) => {
    const { id } = req.params;

    try {
        await AgrochemicalTraderProfile.update(req.body, { where: { id } });
        res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const deleteAgrochemicalTraderProfile = async (req, res) => {
    const { id } = req.params;

    try {
        await AgrochemicalTraderProfile.destroy({ where: { id } });
        res.status(200).json({ message: 'Profile deleted successfully' });
    } catch (error) {
        res.status (500);json({ message: 'Server error', error });
    }
};
