import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './database.js';

// Import routes
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import userRoutes from './routes/userRoutes.js';
import commentRoutes from './routes/commentRoutes.js';      // ✅ thêm
import watchRoutes from './routes/watchRoutes.js';          // ✅ thêm
import categoryRoutes from './routes/categoryRoutes.js';    // ✅ thêm

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);    // ✅ thêm
app.use('/api/watch', watchRoutes);         // ✅ thêm
app.use('/api/categories', categoryRoutes); // ✅ thêm

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
