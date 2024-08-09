import express from 'express';
const router = express.Router();

// Controllers
import { addProductInterest, deleteProductInterest } from '../controllers/productInterestController.js';

// Routes
router.post('/', addProductInterest);
router.delete('/:id', deleteProductInterest);

export default router;
