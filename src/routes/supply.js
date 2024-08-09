import express from 'express';
const router = express.Router();

// Controllers
import { getSupplies, createSupply, updateSupply, deleteSupply } from '../controllers/supplyController.js';

// Routes
router.get('/', getSupplies);
router.post('/', createSupply);
router.put('/:id', updateSupply);
router.delete('/:id', deleteSupply);

export default router;
