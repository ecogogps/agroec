import ProductInterest from '../models/productInterest.js';

export const addProductInterest = async (req, res) => {
    try {
        const productInterest = await ProductInterest.create(req.body);
        res.status(201).json(productInterest);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const deleteProductInterest = async (req, res) => {
    const { id } = req.params;
    
    try {
        await ProductInterest.destroy({ where: { id } });
        res.status(200).json({ message: 'Product interest deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
