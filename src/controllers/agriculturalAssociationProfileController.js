import AgriculturalAssociationProfile from '../models/agriculturalAssociationProfile.js';

export const getAgriculturalAssociationProfile = async (req, res) => {
    const { id } = req.params;

    try {
        const profile = await AgriculturalAssociationProfile.findByPk(id);
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const createAgriculturalAssociationProfile = async (req, res) => {
    try {
        const profile = await AgriculturalAssociationProfile.create(req.body);
        res.status(201).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const updateAgriculturalAssociationProfile = async (req, res) => {
    const { id } = req.params;

    try {
        await AgriculturalAssociationProfile.update(req.body, { where: { id } });
        res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const deleteAgriculturalAssociationProfile = async (req, res) => {
    const { id } = req.params;

    try {
        await AgriculturalAssociationProfile.destroy({ where: { id } });
        res.status(200).json({ message: 'Profile deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
