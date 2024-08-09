import express from 'express';
const router = express.Router();

// Controllers
import { rechargeWallet } from '../controllers/walletController.js';

// Routes
router.post('/recharge', rechargeWallet);

export default router;
