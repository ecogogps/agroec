import express from 'express';
const router = express.Router();

// Controllers
import { getOrders, updateOrderStatus } from '../controllers/orderController.js';

// Routes
router.get('/', getOrders);
router.put('/:id/status', updateOrderStatus);

export default router;
