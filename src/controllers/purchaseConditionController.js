import PurchaseCondition from '../models/purchaseCondition.js';

export const addPurchaseCondition = async (req, res) => {
    try {
        const purchaseCondition = await PurchaseCondition.create(req.body);
        res.status(201).json(purchaseCondition);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const getPurchaseConditions = async (req, res) => {
    try {
        const purchaseConditions = await PurchaseCondition.findAll();
        res.status(200).json(purchaseConditions);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const updatePurchaseCondition = async (req, res) => {
    const { id } = req.params;
    
    try {
        await PurchaseCondition.update(req.body, { where: { id } });
        res.status(200).json({ message: 'Purchase condition updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
