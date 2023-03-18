import React from "react";
import Banner from "../Login/Banner";
import styled from "styled-components";
import Stream from "./Stream";

const Login = () => {
  return (
    <div>
      <Main>
        <Banner />
        <Stream />
      </Main>
    </div>
  );
};

const Main = styled.main`
  width: auto;
  height: auto;
  overflow: auto;
`;

export default Login;
