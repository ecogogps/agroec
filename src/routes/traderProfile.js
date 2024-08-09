import express from 'express';
const router = express.Router();

// Controllers
import { getTraderProfile, createTraderProfile, updateTraderProfile, deleteTraderProfile } from '../controllers/traderProfileController.js';

// Routes
router.get('/:id', getTraderProfile);
router.post('/', createTraderProfile);
router.put('/:id', updateTraderProfile);
router.delete('/:id', deleteTraderProfile);

export default router;
