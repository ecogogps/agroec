import SaleProposal from '../models/saleProposal.js';

export const createSaleProposal = async (req, res) => {
    try {
        const proposal = await SaleProposal.create(req.body);
        res.status(201).json(proposal);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
