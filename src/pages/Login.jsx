import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, FormContainer, Title, Input, Button, Link } from '../styles/AuthStyles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user)); // lưu user
      alert('Đăng nhập thành công!');
      navigate('/', { replace: true });
    } catch (error) {
      alert('Sai email hoặc mật khẩu');
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Đăng nhập</Title>
        <form onSubmit={handleLogin}>
          <Input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <Input type="password" placeholder="Mật khẩu" onChange={e => setPassword(e.target.value)} />
          <Button type="submit">Đăng nhập</Button>
        </form>
        <Link onClick={() => navigate('/register')}>
          Chưa có tài khoản? Đăng ký ngay.
        </Link>
      </FormContainer>
    </Container>
  );
};

export default Login;
