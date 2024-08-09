import express from 'express';
const router = express.Router();

// Controllers
import { getProfile, updateProfile, deleteProfile } from '../controllers/profileController.js';

// Routes
router.get('/:id', getProfile);
router.put('/:id', updateProfile);
router.delete('/:id', deleteProfile);

export default router;
