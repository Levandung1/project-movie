import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 85vh;
  background: linear-gradient(to top, #141414 10%, transparent 90%),
    url("https://i.pinimg.com/originals/22/3c/62/223c6214149e2fe3b0b6f1ceee0e1815.jpg")
      center/cover no-repeat;
  color: white;
  display: flex;
  align-items: flex-end;
  padding: 60px 30px;
`;

const Hero = () => {
  return (
    <Container>
      <div>
        <h1>404 Chạy ngay đi</h1>
        <p>Thể loại: Kinh dị, Hành động</p>
        <button>Xem ngay</button>
      </div>
    </Container>
  );
};

export default Hero;
