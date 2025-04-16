import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, FormContainer, Title, Input, Button, Link } from '../styles/AuthStyles';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
      alert('Đăng ký thành công!');
      navigate('/login');
    } catch (error) {
      alert(error.response.data.message || 'Đăng ký thất bại');
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Đăng ký</Title>
        <form onSubmit={handleRegister}>
          <Input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
          <Input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <Button type="submit">Đăng ký</Button>
        </form>
        <Link onClick={() => navigate('/login')}>
          Đã có tài khoản? Đăng nhập ngay.
        </Link>
      </FormContainer>
    </Container>
  );
};

export default Register;
