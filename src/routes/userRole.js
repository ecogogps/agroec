import express from 'express';
const router = express.Router();

// Controllers
import { addUserRole, getUserRoles, updateUserRole, deleteUserRole } from '../controllers/userRoleController.js';

// Routes
router.post('/', addUserRole);
router.get('/', getUserRoles);
router.put('/:id', updateUserRole);
router.delete('/:id', deleteUserRole);

export default router;
