import express from 'express';
const router = express.Router();

// Controllers
import { suggestProduct } from '../controllers/suggestionController.js';

// Routes
router.post('/', suggestProduct);

export default router;
