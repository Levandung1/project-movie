import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Row = styled.div`
  width: 100%;
  padding: 30px;
  background: #141414;
`;

const RowTitle = styled.h2`
  color: white;
  margin-bottom: 15px;
`;

const MovieSlider = ({ title, endpoint }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api${endpoint}`)
      .then(res => setMovies(res.data))
      .catch(err => console.log(err));
  }, [endpoint]);

  return (
    <Row>
      <RowTitle>{title}</RowTitle>
      <Swiper slidesPerView={6} spaceBetween={10}>
        {movies.map((movie) => (
          <SwiperSlide key={movie._id}>
            <MovieCard img={movie.posterUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Row>
  );
};

export default MovieSlider;