import WatchHistory from '../models/WatchHistory.js';

// Lấy tất cả lịch sử xem
export const getAllWatchHistory = async (req, res) => {
  try {
    const history = await WatchHistory.find();
    res.json(history);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Thêm lịch sử xem
export const addWatchHistory = async (req, res) => {
  const { user, movie } = req.body;

  try {
    const newHistory = new WatchHistory({ user, movie });
    await newHistory.save();
    res.status(201).json(newHistory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
