import express from 'express';
const router = express.Router();

// Controllers
import { createSaleProposal } from '../controllers/saleProposalController.js';

// Routes
router.post('/', createSaleProposal);

export default router;
