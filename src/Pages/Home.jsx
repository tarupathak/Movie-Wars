import React from "react";
import styled from "styled-components";
import Corousal from "../Components/Corousal";
 
const Home = () => {
  return (
    <div>
      <Container>
        <Corousal />
      </Container>
    </div>
  );
};

const Container = styled.main`
  position: relative;
  height: calc(100vh - 250px);
  padding: calc(3.5vw + 5px);
  display: block;
  overflow: hidden;
  background-color: black;
  `;
export default Home;
