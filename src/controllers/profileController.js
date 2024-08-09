import User from '../models/user.js';

export const getProfile = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const updateProfile = async (req, res) => {
    const { id } = req.params;

    try {
        await User.update(req.body, { where: { id } });
        res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const deleteProfile = async (req, res) => {
    const { id } = req.params;

    try {
        await User.destroy({ where: { id } });
        res.status(200).json({ message: 'Profile deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
