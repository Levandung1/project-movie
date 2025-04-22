import express from 'express';
import { uploadFile, deleteFile } from '../controllers/uploadController.js';
import upload from '../middleware/upload.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Upload file (ảnh hoặc video)
router.post('/upload', verifyToken, upload.single('file'), uploadFile);

// Xóa file
router.delete('/delete/:fileUrl', verifyToken, deleteFile);

export default router; 