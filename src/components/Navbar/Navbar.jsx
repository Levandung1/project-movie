import React from "react";
import styled from "styled-components";
import { FaBell, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  z-index: 1000;
`;

const Logo = styled.h1`
  color: red;
  font-size: 26px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;
  color: white;
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  color: white;
`;

const Button = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <Container>
      <Logo>MY MOVIE</Logo>
      <Menu>
        <li>Trang chủ</li>
        <li>Series</li>
        <li>Phim</li>
        <li>Mới & Phổ biến</li>
        <li>Danh sách của tôi</li>
      </Menu>
      <AuthButtons>
        {user ? (
          <>
            <span>👤 {user.username}</span>
            <Button onClick={handleLogout}>Đăng xuất</Button>
          </>
        ) : (
          <>
            <Button onClick={() => navigate("/login")}>Đăng nhập</Button>
            <Button onClick={() => navigate("/register")}>Đăng ký</Button>
          </>
        )}
      </AuthButtons>
    </Container>
  );
};

export default Navbar;
