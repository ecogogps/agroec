import express from 'express';
const router = express.Router();

// Controllers
import { login, forgotPassword } from '../controllers/authController.js';

// Routes
router.post('/login', login);
router.post('/forgot-password', forgotPassword);

export default router;
