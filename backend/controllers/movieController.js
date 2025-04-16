import Movie from '../models/Movie.js';

export const getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

export const createMovie = async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.status(201).json(movie);
};

export const updateMovie = async (req, res) => {
  const updated = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ message: 'Movie deleted' });
};