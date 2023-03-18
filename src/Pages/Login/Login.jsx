import React from "react";
import Banner from "../Login/Banner";
import styled from "styled-components";

const Login = () => {
  return (
    <div>
      <Main>
        <Banner />
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
