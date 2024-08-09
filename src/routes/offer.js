import express from 'express';
const router = express.Router();

// Controllers
import { getOffers, createOffer, updateOffer, deleteOffer } from '../controllers/offerController.js';

// Routes
router.get('/', getOffers);
router.post('/', createOffer);
router.put('/:id', updateOffer);
router.delete('/:id', deleteOffer);

export default router;
