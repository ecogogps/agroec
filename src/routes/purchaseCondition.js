import express from 'express';
const router = express.Router();

// Controllers
import { addPurchaseCondition, getPurchaseConditions, updatePurchaseCondition } from '../controllers/purchaseConditionController.js';

// Routes
router.post('/', addPurchaseCondition);
router.get('/', getPurchaseConditions);
router.put('/:id', updatePurchaseCondition);

export default router;
