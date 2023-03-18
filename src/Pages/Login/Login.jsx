import React from "react";
import Banner from "../Login/Banner";
import styled from "styled-components";
import Stream from "./Stream";
import DownloadNow from "./DownloadNow";
import GroupWatch from "./GroupWatch";
import MarvelStudio from "./MarvelStudio";

const Login = () => {
  return (
    <div>
      <Main>
        <Banner />
        <Stream />
        <DownloadNow />
        <GroupWatch />
        <MarvelStudio />
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
