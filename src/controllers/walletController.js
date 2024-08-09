import Wallet from '../models/wallet.js';

export const rechargeWallet = async (req, res) => {
    try {
        const wallet = await Wallet.create(req.body);
        res.status(201).json(wallet);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
