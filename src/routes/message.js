import express from 'express';
const router = express.Router();

// Controllers
import { getMessages } from '../controllers/messageController.js';

// Routes
router.get('/', getMessages);

export default router;
