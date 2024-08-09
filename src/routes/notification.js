import express from 'express';
const router = express.Router();

// Controllers
import { sendNotification } from '../controllers/notificationController.js';

// Routes
router.post('/send', sendNotification);

export default router;
