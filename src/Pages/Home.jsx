import React from "react";
import styled from "styled-components";
import Corousal from "../Components/Corousal";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Corousal />
      </Container>
      <Footer />
    </div>
  );
};

const Container = styled.main`
  position: relative;
  height: calc(110vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  display: block;
  overflow: hidden;
  background-color: black;
`;
export default Home;
