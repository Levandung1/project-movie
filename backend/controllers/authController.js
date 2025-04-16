import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';
import User from '../models/User.js';

// Đăng nhập ADMIN
export const adminLogin = async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(401).json({ message: 'Admin không tồn tại' });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(401).json({ message: 'Sai mật khẩu Admin' });

  const token = jwt.sign({ id: admin._id, username: admin.username, role: 'admin' }, process.env.JWT_SECRET);

  res.json({ token, admin: { id: admin._id, username: admin.username } });
};

// Đăng ký USER
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ message: "Email đã tồn tại" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ username, email, password: hashedPassword });
  await user.save();

  res.status(201).json({ message: "Đăng ký thành công", user });
};

// Đăng nhập USER
export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Người dùng không tồn tại' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Sai mật khẩu' });

  const token = jwt.sign({ id: user._id, email: user.email, role: 'user' }, process.env.JWT_SECRET);

  res.json({ token, user: { id: user._id, email: user.email } });
};
