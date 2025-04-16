import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: black; /* ✅ đảm bảo toàn bộ chữ mặc định là đen */
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2``;

const AddButton = styled.button`
  background-color: #e50914;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  color: black; /* ✅ chữ trong bảng là đen */
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 12px;
  text-align: left;
  color: black; /* ✅ chữ trong header là đen */
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  color: black; /* ✅ chữ trong ô là đen */
`;

const ActionButton = styled.button`
  margin-right: 10px;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.edit ? '#007bff' : '#dc3545'};
  color: white;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  width: 400px;
  color: black; /* ✅ chữ trong modal là đen */
`;

const ModalTitle = styled.h3`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
`;

const ModalButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 10px;
`;

const ModalButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: ${props => props.cancel ? '#6c757d' : '#e50914'};
`;

const ManageMovies = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Batman Begins',
      year: 2005,
      genre: 'Hành động',
      views: 12000,
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);
  const [formData, setFormData] = useState({ title: '', year: '', genre: '', views: '' });

  const openAddModal = () => {
    setFormData({ title: '', year: '', genre: '', views: '' });
    setEditingMovie(null);
    setModalOpen(true);
  };

  const openEditModal = (movie) => {
    setFormData(movie);
    setEditingMovie(movie);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setFormData({ title: '', year: '', genre: '', views: '' });
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (editingMovie) {
      setMovies(prev =>
        prev.map(m => (m.id === editingMovie.id ? { ...formData, id: editingMovie.id } : m))
      );
    } else {
      const newMovie = { ...formData, id: Date.now() };
      setMovies(prev => [...prev, newMovie]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    const confirm = window.confirm('Bạn có chắc muốn xoá phim này?');
    if (confirm) {
      setMovies(prev => prev.filter(m => m.id !== id));
    }
  };

  return (
    <Container>
      <TitleBar>
        <Title>🎬 Quản lý phim</Title>
        <AddButton onClick={openAddModal}>➕ Thêm phim</AddButton>
      </TitleBar>

      <Table>
        <thead>
          <tr>
            <Th>Tiêu đề</Th>
            <Th>Năm</Th>
            <Th>Thể loại</Th>
            <Th>Lượt xem</Th>
            <Th>Hành động</Th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie.id}>
              <Td>{movie.title}</Td>
              <Td>{movie.year}</Td>
              <Td>{movie.genre}</Td>
              <Td>{movie.views}</Td>
              <Td>
                <ActionButton edit onClick={() => openEditModal(movie)}>Sửa</ActionButton>
                <ActionButton onClick={() => handleDelete(movie.id)}>Xoá</ActionButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>

      {isModalOpen && (
        <ModalOverlay>
          <ModalBox>
            <ModalTitle>{editingMovie ? 'Sửa phim' : 'Thêm phim mới'}</ModalTitle>
            <FormGroup>
              <Label>Tiêu đề</Label>
              <Input name="title" value={formData.title} onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
              <Label>Năm</Label>
              <Input name="year" value={formData.year} onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
              <Label>Thể loại</Label>
              <Input name="genre" value={formData.genre} onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
              <Label>Lượt xem</Label>
              <Input name="views" value={formData.views} onChange={handleInputChange} />
            </FormGroup>
            <ModalButtonGroup>
              <ModalButton cancel onClick={closeModal}>Huỷ</ModalButton>
              <ModalButton onClick={handleSubmit}>Lưu</ModalButton>
            </ModalButtonGroup>
          </ModalBox>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default ManageMovies;