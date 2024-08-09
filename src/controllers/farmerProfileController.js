import FarmerProfile from '../models/farmerProfile.js';

export const getFarmerProfile = async (req, res) => {
    const { id } = req.params;

    try {
        const profile = await FarmerProfile.findByPk(id);
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const createFarmerProfile = async (req, res) => {
    try {
        const profile = await FarmerProfile.create(req.body);
        res.status(201).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const updateFarmerProfile = async (req, res) => {
    const { id } = req.params;

    try {
        await FarmerProfile.update(req.body, { where: { id } });
        res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const deleteFarmerProfile = async (req, res) => {
    const { id } = req.params;

    try {
        await FarmerProfile.destroy({ where: { id } });
        res.status(200).json({ message: 'Profile deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
