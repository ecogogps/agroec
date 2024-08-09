import express from 'express';
import multer from 'multer';
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Controllers
import { importExcel } from '../controllers/excelController.js';

// Routes
router.post('/import', upload.single('file'), importExcel);

export default router;
