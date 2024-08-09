import express from 'express';
const router = express.Router();

// Controllers
import { getFarmerProfile, createFarmerProfile, updateFarmerProfile, deleteFarmerProfile } from '../controllers/farmerProfileController.js';

// Routes
router.get('/:id', getFarmerProfile);
router.post('/', createFarmerProfile);
router.put('/:id', updateFarmerProfile);
router.delete('/:id', deleteFarmerProfile);

export default router;
