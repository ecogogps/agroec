import express from 'express';
const router = express.Router();

// Controllers
import { createPurchaseProposal, getPurchaseProposals, updatePurchaseProposal, deletePurchaseProposal } from '../controllers/purchaseProposalController.js';

// Routes
router.post('/', createPurchaseProposal);
router.get('/', getPurchaseProposals);
router.put('/:id', updatePurchaseProposal);
router.delete('/:id', deletePurchaseProposal);

export default router;
