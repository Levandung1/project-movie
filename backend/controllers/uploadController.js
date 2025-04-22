import path from 'path';
import fs from 'fs';

export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Tạo URL cho file đã upload
    const fileUrl = `/uploads/${req.file.path.split('uploads/')[1]}`;

    res.status(200).json({
      message: 'File uploaded successfully',
      fileUrl: fileUrl,
      fileName: req.file.filename,
      fileType: req.file.mimetype,
      fileSize: req.file.size
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Error uploading file' });
  }
};

export const deleteFile = async (req, res) => {
  try {
    const { fileUrl } = req.params;
    const filePath = path.join(process.cwd(), 'uploads', fileUrl);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      res.status(200).json({ message: 'File deleted successfully' });
    } else {
      res.status(404).json({ message: 'File not found' });
    }
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ message: 'Error deleting file' });
  }
}; 