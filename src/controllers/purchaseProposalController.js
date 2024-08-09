import PurchaseProposal from '../models/purchaseProposal.js';

export const createPurchaseProposal = async (req, res) => {
    try {
        const proposal = await PurchaseProposal.create(req.body);
        res.status(201).json(proposal);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const getPurchaseProposals = async (req, res) => {
    try {
        const proposals = await PurchaseProposal.findAll();
        res.status(200).json(proposals);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const updatePurchaseProposal = async (req, res) => {
    const { id } = req.params;

    try {
        await PurchaseProposal.update(req.body, { where: { id } });
        res.status(200).json({ message: 'Purchase proposal updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const deletePurchaseProposal = async (req, res) => {
    const { id } = req.params;

    try {
        await PurchaseProposal.destroy({ where: { id } });
        res.status(200).json({ message: 'Purchase proposal deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
