import express from 'express';
const router = express.Router();

// Controllers
import { sendMessage, getMessages } from '../controllers/chatController.js';

// Routes
router.post('/', sendMessage);
router.get('/', getMessages);

export default router;
