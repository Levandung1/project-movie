import Comment from '../models/Comment.js';

// Lấy tất cả bình luận
export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Thêm bình luận
export const addComment = async (req, res) => {
  const { user, movie, content } = req.body;

  try {
    const newComment = new Comment({ user, movie, content });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
