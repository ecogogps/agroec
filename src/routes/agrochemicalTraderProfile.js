import express from 'express';
const router = express.Router();

// Controllers
import { getAgrochemicalTraderProfile, createAgrochemicalTraderProfile, updateAgrochemicalTraderProfile, deleteAgrochemicalTraderProfile } from '../controllers/agrochemicalTraderProfileController.js';

// Routes
router.get('/:id', getAgrochemicalTraderProfile);
router.post('/', createAgrochemicalTraderProfile);
router.put('/:id', updateAgrochemicalTraderProfile);
router.delete('/:id', deleteAgrochemicalTraderProfile);

export default router;
