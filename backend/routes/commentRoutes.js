import express from 'express';
import { getAllComments, addComment } from '../controllers/commentController.js';

const router = express.Router();

router.get('/', getAllComments);
router.post('/', addComment);

export default router;
