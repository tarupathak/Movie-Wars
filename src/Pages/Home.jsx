import React from "react";
import styled from "styled-components";
import Brand from "../Components/Brand";
import Corousal from "../Components/Corousal";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import OurMovies from "../Components/OurMovies";
import NewMovies from "../Components/NewMovies";
import NewToMovie from "../Components/NewToMovie";
import ForKids from "../Components/ForKids";
import Hollywood from "../Components/Hollywood";
import Popular from "../Components/Popular";
import TrendingMovies from "../Components/TrendingMovies";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Corousal />
        <Brand />
        <OurMovies />
        <NewMovies />
        <NewToMovie />
        <ForKids />
        <Hollywood />
        <Popular />
        <TrendingMovies />
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.main`
  position: relative;
  height: fit-content;
  padding: 0 calc(3.5vw + 5px);
  display: block;
  overflow-x: hidden;
  background-color: black;
`;
export default Home;
