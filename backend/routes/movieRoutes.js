import express from 'express';
import Movie from '../models/Movie.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

export default router;
