import express from 'express';
import { getAllWatchHistory, addWatchHistory } from '../controllers/watchHistoryController.js';

const router = express.Router();

router.get('/', getAllWatchHistory);
router.post('/', addWatchHistory);

export default router;
