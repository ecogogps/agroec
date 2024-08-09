import express from 'express';
const router = express.Router();

// Controllers
import { getAgriculturalAssociationProfile, createAgriculturalAssociationProfile, updateAgriculturalAssociationProfile, deleteAgriculturalAssociationProfile } from '../controllers/agriculturalAssociationProfileController.js';

// Routes
router.get('/:id', getAgriculturalAssociationProfile);
router.post('/', createAgriculturalAssociationProfile);
router.put('/:id', updateAgriculturalAssociationProfile);
router.delete('/:id', deleteAgriculturalAssociationProfile);

export default router;
