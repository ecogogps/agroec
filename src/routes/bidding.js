import express from 'express';
const router = express.Router();

// Controllers
import { addBidding, getBiddings, updateBidding, deleteBidding } from '../controllers/biddingController.js';

// Routes
router.post('/', addBidding);
router.get('/', getBiddings);
router.put('/:id', updateBidding);
router.delete('/:id', deleteBidding);

export default router;
