import mongoose from 'mongoose';

const watchHistorySchema = new mongoose.Schema({
  user: { type: String, required: true },
  movie: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const WatchHistory = mongoose.model('WatchHistory', watchHistorySchema);
export default WatchHistory;
