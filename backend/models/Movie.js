import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String,
  views: Number,
  posterUrl: String
});

export default mongoose.model('Movie', movieSchema);
