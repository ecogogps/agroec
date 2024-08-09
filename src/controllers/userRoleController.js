import UserRole from '../models/userRole.js';

export const addUserRole = async (req, res) => {
    try {
        const userRole = await UserRole.create(req.body);
        res.status(201).json(userRole);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const getUserRoles = async (req, res) => {
    try {
        const userRoles = await UserRole.findAll();
        res.status(200).json(userRoles);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const updateUserRole = async (req, res) => {
    const { id } = req.params;

    try {
        await UserRole.update(req.body, { where: { id } });
        res.status(200).json({ message: 'User role updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const deleteUserRole = async (req, res) => {
    const { id } = req.params;

    try {
        await UserRole.destroy({ where: { id } });
        res.status(200).json({ message: 'User role deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
