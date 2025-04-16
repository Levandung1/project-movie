import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from "../components/Hero/Hero";
import MovieSlider from "../components/MovieSlider/MovieSlider";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MovieSlider title="Vi bạn đã xem Ngôi trường xác sống" endpoint="/movies/recommended" />
      <MovieSlider title="Tiếp tục xem của bạn" endpoint="/movies/continue" />
      <MovieSlider title="Phim trẻ em & Gia đình" endpoint="/movies/kids" />
      <MovieSlider title="Phim hành động nổi bật" endpoint="/movies/action" />
      <Footer />
    </>
  );
};

export default Home;
