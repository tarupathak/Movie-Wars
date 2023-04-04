import React from "react";
import styled from "styled-components";
import Brand from "../Components/Brand";
import Corousal from "../Components/Corousal";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Corousal />
        <Brand />
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
  overflow: hidden;
  background-color: black;
`;
export default Home;
