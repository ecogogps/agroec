import express from 'express';
const router = express.Router();

// Controllers
import { payWarranty } from '../controllers/warrantyController.js';

// Routes
router.post('/', payWarranty);

export default router;
