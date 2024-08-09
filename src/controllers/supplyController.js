import Supply from '../models/supply.js';

export const getSupplies = async (req, res) => {
    try {
        const supplies = await Supply.findAll();
        res.status(200).json(supplies);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const createSupply = async (req, res) => {
    try {
        const supply = await Supply.create(req.body);
        res.status(201).json(supply);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const updateSupply = async (req, res) => {
    const { id } = req.params;

    try {
        await Supply.update(req.body, { where: { id } });
        res.status(200).json({ message: 'Supply updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const deleteSupply = async (req, res) => {
    const { id } = req.params;

    try {
        await Supply.destroy({ where: { id } });
        res.status(200).json({ message: 'Supply deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
