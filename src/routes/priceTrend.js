import express from 'express';
const router = express.Router();

// Controllers
import { getPriceTrend } from '../controllers/priceTrendController.js';

// Routes
router.get('/', getPriceTrend);

export default router;
